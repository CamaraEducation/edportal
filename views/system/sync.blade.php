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

	$url = "https://dashboard.camara.org/sc/sync";

	$curl = curl_init($url);
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

	$headers = array(
	"Content-Type: application/x-www-form-urlencoded",
	);
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

	$post = array(
		'cdata' => $cdata,
		'adata' => $adata
	);

	$data = http_build_query($post);

	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

	//for debug only!
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

	$resp = curl_exec($curl);
	curl_close($curl);
	var_dump($resp);

	if($result == 'OK'){
		//SysSyncController::update($sync['max']);
		echo 'Synced';
	}
	
@endphp