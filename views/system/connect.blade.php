@extends('layout.app')
@section('title', 'System Configuration')

@section('header')
<style>
    .btn.btn-primary, .btn.btn-secondary{
        color: #fff;
        padding: 10px 10% 10px 10%;
        font-weight: bolder;
    }
</style>
@endsection

@section('content')
    <div class="content-body">
        <!-- modal -->
		<div class="modal fade" id="empModal" role="dialog" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content sbody">
					<div class="modal-body"></div>
				</div>
			</div>
		</div>

        <div class="container-fluid">
            <center>
                <button class="btn btn-primary check" data-id="sync">Check Synchronisation</button> &nbsp;
                <button class="btn btn-secondary check" data-id="nms">Verify NMS Data</button>
            </center>
        </div>
    </div>    
@endsection

@section('footer')
<script>
    $('.check').click(function(){			
		var id = $(this).data('id');
		
		alert('please be patient while fetching ur results, response may take time to load');
		// AJAX request
		$.ajax({
			url: '/configure/sync/'+id,
			type: 'get',
			success: function(response){
				$('.modal-body').html(response); 

				// Display Modal
				$('#empModal').modal('show'); 
			}
		});
	});
</script>
@endsection