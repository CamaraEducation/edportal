@extends('layout.app')
@section('title', 'create App')
@section('header')
    
@endsection
@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <!-- Add Project -->
            <div class="modal fade" id="addProjectSidebar">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create Project</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label class="text-black font-w500">Project Name</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label class="text-black font-w500">Deadline</label>
                                    <input type="date" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label class="text-black font-w500">Client Name</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary">CREATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Hi, welcome back!</h4>
                        <span>Element</span>
                    </div>
                </div>
                <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Form</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Element</a></li>
                    </ol>
                </div>
            </div>
            <!-- row -->
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Input Style</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control input-default " placeholder="input-default">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control input-rounded" placeholder="input-rounded">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Checkbox</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheckBox1" required>
                                        <label class="custom-control-label" for="customCheckBox1">Checkbox 1</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-info">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox2" required>
                                        <label class="custom-control-label" for="customCheckBox2">Checkbox 2</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-success">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox3" required>
                                        <label class="custom-control-label" for="customCheckBox3">Checkbox 3</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-warning">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox4" required>
                                        <label class="custom-control-label" for="customCheckBox4">Checkbox 4</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-danger">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox5" required>
                                        <label class="custom-control-label" for="customCheckBox5">Checkbox 5</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="custom-control custom-checkbox mb-3 check-xs">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox6" required>
                                        <label class="custom-control-label" for="customCheckBox6"></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-info">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox7" required>
                                        <label class="custom-control-label" for="customCheckBox7"></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-success check-lg">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox8" required>
                                        <label class="custom-control-label" for="customCheckBox8"></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="custom-control custom-checkbox mb-3 checkbox-warning check-xl">
                                        <input type="checkbox" class="custom-control-input" checked id="customCheckBox9" required>
                                        <label class="custom-control-label" for="customCheckBox9"></label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Textarea</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="4" id="comment"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Input Size</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <input class="form-control form-control-lg" type="text" placeholder="form-control-lg">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Default input">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control form-control-sm" type="text" placeholder="form-control-sm">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Select Size</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <select class="form-control default-select form-control-lg">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control default-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control default-select form-control-sm">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Select List</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <label>Select list (select one):</label>
                                        <select class="form-control default-select" id="sel1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Mutiple select list (hold shift to select more than one):</label>
                                        <select multiple class="form-control default-select" id="sel2">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Horizontal Form</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>First Name</label>
                                            <input type="text" class="form-control" placeholder="1234 Main St">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="Email">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label>State</label>
                                            <select id="inputState" class="form-control default-select">
                                                <option selected>Choose...</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label>Zip</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox">
                                            <label class="form-check-label">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Vertical Form</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" placeholder="Password">
                                        </div>
                                    </div>
                                    <fieldset class="form-group">
                                        <div class="row">
                                            <label class="col-form-label col-sm-3 pt-0">Radios</label>
                                            <div class="col-sm-9">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios" value="option1" checked>
                                                    <label class="form-check-label">
                                                        First radio
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios" value="option2">
                                                    <label class="form-check-label">
                                                        Second radio
                                                    </label>
                                                </div>
                                                <div class="form-check disabled">
                                                    <input class="form-check-input" type="radio" name="gridRadios" value="option3" disabled>
                                                    <label class="form-check-label">
                                                        Third disabled radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="form-group row">
                                        <div class="col-sm-3">Checkbox</div>
                                        <div class="col-sm-9">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox">
                                                <label class="form-check-label">
                                                    Example checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-10">
                                            <button type="submit" class="btn btn-primary">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Checkboxes</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <div class="form-check mb-2">
                                            <input type="checkbox" class="form-check-input" id="check1" value="" checked>
                                            <label class="form-check-label" for="check1">Option 1</label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input type="checkbox" class="form-check-input" id="check2" value="">
                                            <label class="form-check-label" for="check2">Option 2</label>
                                        </div>
                                        <div class="form-check disabled">
                                            <input type="checkbox" class="form-check-input" id="check3" value="" disabled>
                                            <label class="form-check-label" for="check3">Disabled</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Inline Checkboxes</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value=""
                                                    checked>Option 1
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="">Option 2
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline disabled">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value=""
                                                    disabled>Disabled
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Radio Buttons</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group mb-0">
                                        <div class="radio">
                                            <label><input type="radio" name="optradio"> Option 1</label>
                                        </div>
                                        <div class="radio">
                                            <label><input type="radio" name="optradio"> Option 2</label>
                                        </div>
                                        <div class="radio disabled">
                                            <label><input type="radio" name="optradio" disabled> Option 3</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Inline Radio </h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group mb-0">
                                        <label class="radio-inline mr-3"><input type="radio" name="optradio"> Option 1</label>
                                        <label class="radio-inline mr-3"><input type="radio" name="optradio"> Option 2</label>
                                        <label class="radio-inline mr-3"><input type="radio" name="optradio"> Option 3</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Readonly</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="text" readonly class="form-control-plaintext" value="email@example.com">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" placeholder="Password">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Inline Form</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form class="form-inline">
                                    <div class="form-group mb-2">
                                        <label class="sr-only">Email</label>
                                        <input type="text" readonly class="form-control-plaintext" value="email@example.com">
                                    </div>
                                    <div class="form-group mx-sm-3 mb-2">
                                        <label class="sr-only">Password</label>
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Form grid</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="First name">
                                        </div>
                                        <div class="col-sm-6 mt-2 mt-sm-0">
                                            <input type="text" class="form-control" placeholder="Last name">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Form Row</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="First name">
                                        </div>
                                        <div class="col-sm-6 mt-2 mt-sm-0">
                                            <input type="text" class="form-control" placeholder="Last name">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Form Label Size</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control form-control-sm" placeholder="col-form-label-sm">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" placeholder="col-form-label">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control form-control-lg" placeholder="col-form-label-lg">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Column size</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-row">
                                        <div class="col-sm-7">
                                            <input type="text" class="form-control" placeholder="City">
                                        </div>
                                        <div class="col mt-2 mt-sm-0">
                                            <input type="text" class="form-control" placeholder="State">
                                        </div>
                                        <div class="col mt-2 mt-sm-0">
                                            <input type="text" class="form-control" placeholder="Zip">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Auto-sizing</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-row align-items-center">
                                        <div class="col-auto">
                                            <label class="sr-only">Name</label>
                                            <input type="text" class="form-control mb-2" placeholder="Jane Doe">
                                        </div>
                                        <div class="col-auto">
                                            <label class="sr-only">Username</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@</div>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Username">
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox">
                                                <label class="form-check-label">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Custom Select</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <div class="form-row align-items-center">
                                        <div class="col-auto my-1">
                                            <label class="mr-sm-2">Preference</label>
                                            <select class="mr-sm-2 default-select" id="inlineFormCustomSelect">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Disabled forms</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form>
                                    <fieldset disabled>
                                        <div class="form-group">
                                            <label>Disabled input</label>
                                            <input type="text" class="form-control" placeholder="Disabled input">
                                        </div>
                                        <div class="form-group">
                                            <label>Disabled select menu</label>
                                            <select class="form-control default-select">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" disabled>
                                            <label class="form-check-label">
                                                Can't check this
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Input Group</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3 input-warning-o">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">@</span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Username">
                                    </div>
                                    <div class="input-group mb-3 input-success-o">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">@</span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Username">
                                    </div>
                                    <div class="input-group mb-3 input-primary">
                                        <input type="text" class="form-control" placeholder="Recipient's username">
                                        <div class="input-group-append">
                                            <span class="input-group-text">@example.com</span>
                                        </div>
                                    </div>

                                    <label>Your vanity URL</label>
                                    <div class="input-group mb-3  input-success">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">https://example.com</span>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group mb-3  input-info">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    </div>

                                    <div class="input-group   input-danger">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">With textarea</span>
                                        </div>
                                        <textarea class="form-control"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Input Group Size</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Small</span>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Default</span>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Large</span>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Checkboxes and radios</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="checkbox">
                                            </div>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="radio">
                                            </div>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Multiple inputs</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">First and last name</span>
                                        </div>
                                        <input type="text" class="form-control">
                                        <input type="text" class="form-control">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Multiple addons</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                            <span class="input-group-text">0.00</span>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <span class="input-group-text">$</span>
                                            <span class="input-group-text">0.00</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Button addons</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary" type="button">Button</button>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">Button</button>
                                        </div>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary" type="button">Button</button>
                                            <button class="btn btn-primary" type="button">Button</button>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">Button</button>
                                            <button class="btn btn-primary" type="button">Button</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Buttons with dropdowns</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown</button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div role="separator" class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown</button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div role="separator" class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Segmented buttons</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button type="button" class="btn btn-primary">Action</button>
                                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div role="separator" class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <button type="button" class="btn btn-primary">Action</button>
                                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div role="separator" class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Custom select</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text">Options</label>
                                        </div>
                                        <select class="default-select">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div class="input-group mb-3">
                                        <select class="default-select">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append">
                                            <label class="input-group-text">Options</label>
                                        </div>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary" type="button">Button</button>
                                        </div>
                                        <select class="default-select">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div class="input-group">
                                        <select class="default-select">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">Button</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Custom file input</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form custom_file_input">
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input">
                                            <label class="custom-file-label">Choose file</label>
                                        </div>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input">
                                            <label class="custom-file-label">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary btn-sm" type="button">Button</button>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input">
                                            <label class="custom-file-label">Choose file</label>
                                        </div>
                                    </div>

                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input">
                                            <label class="custom-file-label">Choose file</label>
                                            
                                        </div>
                                        
                                    </div>
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