@extends('layout.app')
@section('title', 'System Configuration')

@section('header')
<style>
    .btn.btn-primary {
        color: #fff;
        padding: 10px 10% 10px 10%;
        margin-left: 40%;
    }
</style>
@endsection

@section('content')
    <div class="content-body">
        <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title text-primary">Update System Configuration</h3>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form action="/change/configs" method="POST">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label >Select Country</label>
                                        <select class="form-control" name="country" id="country" required onselect="myFunction()">
                                            <option value="" hidden>Select Country</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Zambia">Zambia</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label >Select Region</label>
                                        <select class="form-control" name="region" id="region" required>
                                            <option value="" hidden>Select Region</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>
                                            <span>Ownership Category</span>
                                        </label>
                                        <div class="form-check">
                                            <input class="form-check-input" name="ownership" type="radio" id="inlineCheckbox1" value="public">
                                            <label class="form-check-label">Public School</label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" name="ownership" type="radio" id="inlineCheckbox2" value="private">
                                            <label class="form-check-label">Private School</label>
                                          </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>
                                            <span>School Level</span>
                                            <small class="text-danger text-block">Check all that apply</small>
                                        </label>
                                        <div class="form-check">
                                            <input class="form-check-input" name="level[]" type="checkbox" id="level_pri" value="primary">
                                            <label class="form-check-label">Primary School</label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" name="level[]" type="checkbox" id="level_sec" value="secondary">
                                            <label class="form-check-label" for="inlineCheckbox2">Secondary School</label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" name="level[]" type="checkbox" id="level_col" value="college">
                                            <label class="form-check-label">Higher Learning</label>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>School Name</label>
                                        <input type="text" name="school" id="title" class="form-control" placeholder="Enter the Name of the School" required>
                                    </div>
                                    
                                    <div class="form-group col-md-6">
                                        <br><br>
                                        <button type="submit" id="submit" class="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            <form>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>    
@endsection

@section('footer')
<script>
    function myFunction() {
        alert("The text has been changed.");
    }

    $('#country').change(function(){
        //fetch json file from path /assets/data/location.json
        $.getJSON("/assets/data/locations.json", function(data){
            //get the value of the selected option
            var country = $('#country').val();
            //loop through the json file
            $.each(data, function(key, value){
                //if the value of the selected option is equal to the key of the json file
                if(country == key){
                    //set the value of the select dropdown with id region to the value of the json file
                    $('#region').empty()
                    $('#region').append('<option value="" hidden>Select Region</option>');
                    $.each(value, function(key, value){
                        $('#region').append('<option value="'+value+'">'+value+'</option>');
                    });
                }
            });
        });
    });
</script>
@endsection