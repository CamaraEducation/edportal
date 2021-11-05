@extends('layout.app')
@section('title', 'create App')
@section('header')
    
@endsection
@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Add a new Application</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="/create/app" method="POST">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>App Name</label>
                                            <input type="text" name="app_name" id="name" class="form-control" placeholder="enter app name i.e. wikipedia">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>App type</label>
                                            <select id="app_type" name="app_type" class="form-control default-select">
                                                <option value="" hidden>select app type</option>
                                                <option valaue='hosted'>Hosted</option>
                                                <option value="linked">Linked</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>App Path</label>
                                            <input type="text" name="app_path" id="app_path" class="form-control" placeholder="folder or Link">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Thumbnail</label>
                                            <input type="file" name="thumbnail" id="thumbnail" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>App Description</label>
                                            <textarea class="form-control" name="description" rows="4" id="description"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('footer')
    
@endsection