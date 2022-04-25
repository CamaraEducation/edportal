@php 
	$school = Portal::configs();
	$sync = SysSyncController::init();
	$applytics = $sync['cdata'];
	$portlytics = $sync['gdata'];
@endphp


@php $cdata = ''; $no = 0; @endphp
@foreach ($applytics as $analytic)
	@php 
		$age = $analytic['age'] - UsersControl::fetch_data($analytic['visitor'], 'user_age', 'data');
		$cdata .= ' "'.$no.'" : {
			"school" : "' .$school['school']. '",
			"category" : "' .$school['category']. '",
			"ownership" : "' .$school['ownership']. '",
			"region" : "' .$school['region']. '",
			"country" : "' .$school['country']. '",
			"title" : "' .$analytic['title']. '",
			"type" : "' .$analytic['con_type']. '",
			"class" : "' .UsersControl::fetch_data($analytic['visitor'], 'user_class', 'data'). '",
			"age" : "' .$age. '",
			"role" : "' .get_user_role(UsersControl::fetch_data($analytic['visitor'], 'user_role', 'main')). '",
			"created" : "' .$analytic['time']. '"
		},'; $no++
	@endphp
@endforeach
@php $cdata = '{'. $cdata .'"white":"white"}' @endphp


@php $adata = ''; $no = 0; @endphp
@foreach ($portlytics as $analytic)
	@php 
		$age = $analytic['age'] - UsersControl::fetch_data($analytic['visitor'], 'user_age', 'data');
		$adata .= ' "'.$no.'" : {
			"school" : "' .$school['school']. '",
			"category" : "' .$school['category']. '",
			"ownership" : "' .$school['ownership']. '",
			"region" : "' .$school['region']. '",
			"country" : "' .$school['country']. '",
			"uri" : "' .$analytic['uri']. '",
			"identifier" : "' .$analytic['identifier']. '",
			"class" : "' .UsersControl::fetch_data($analytic['visitor'], 'user_class', 'data'). '",
			"age" : "' .$age. '",
			"role" : "' .get_user_role(UsersControl::fetch_data($analytic['visitor'], 'user_role', 'main')). '",
			"time" : "' .$analytic['live']. '",
			"created" : "' .$analytic['time']. '"
		},'; $no++
	@endphp
@endforeach
@php $adata = '{'. $adata .'"":""}'; @endphp

@php
	// building array of variables
	/*$content = http_build_query(array('cdata' => $cdata, 'adata' => $adata ));
	
	// creating the context change POST to GET if that is relevant 
	$context = stream_context_create(array(
		'http' => array( 'method'  => 'POST', 'content' => $content,
			'header'  => "Content-Type: application/x-www-form-urlencoded"
		)
	));

	$result = file_get_contents(sync_conn(), null, $context);


	SysSyncController::update($sync['max']);*/

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, sync_conn());
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	$post = array(
		'cdata' => $cdata,
		'adata' => $adata
	);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

	$result = curl_exec($ch);
	if (curl_errno($ch)) {