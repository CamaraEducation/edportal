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
                    <a href="javascript:void(0);" class="btn btn-info">+ Add User</a>
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
@endsection