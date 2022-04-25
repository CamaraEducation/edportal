@extends('layout.app')
@section('title', 'Users\' List')
@section('header')
    @css('/assets/vendor/chartist/css/chartist.min')
    @css('/assets/vendor/datatables/css/jquery.dataTables.min')
@endsection
@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <div class="card">
                <div class="card-header d-sm-flex d-block">
                    <div class="mr-auto mb-sm-0 mb-3">
                        <h2 class="card-title mb-2 text-primary">Users Listing</h2>
                    </div>
                    <a href="/add/user" class="btn btn-info">+ Add User</a> &nbsp;
                    <a href="/import/user" class="btn btn-info">+ Import User</a>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        @if ($type == 'student') @include('user.student')
                        @else @include(' user.staff') @endif
                    </div>
                </div>
            </div>
        </div>
    </div>	
@endsection
@section('footer')
    @js('/assets/vendor/datatables/js/jquery.dataTables.min.js')
    @js('/assets/js/plugins-init/datatables.init.js')

    <script>
        function user_delete(id){
        var text = confirm('Are you sure you want to delete this document?');
    
        if(text == true){
            $.ajax({
                url: '/delete/user/'+id,
                type: 'GET',
                success: function(data){
                    $('#'+id).remove();
                }
            });
        }else{
            console.log('not deleted');
        }  
    }
    </script>
@endsection