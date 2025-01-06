<div class="modal fade" id="registerNewUser" tabindex="-1" aria-labelledby="registerNewUserLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="registerNewUserLabel">{{__('Register New User')}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form action="post" name="userRegistrationForm">
                    @csrf
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" name="username" class='form-control' placeholder="johndoe, regId, etc" required>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label class="form-label">Full Name</label>
                                <input type="text" name="fullname" class='form-control' placeholder="John Doe" required>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label class="form-label">Email address</label>
                                <input type="text" name="email" class='form-control' placeholder="doe@example.com" required>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <label class="form-label">User role</label>
                                <select name="user_role" class="form-select" data-placeholder="Select user role" required>
                                    @php $adminRoles = \App\Models\Role::admins() @endphp
                                    @foreach (\App\Models\Role::all() as $role)
                                        @if(!in_array($loggedUser->role, $adminRoles) && in_array($role->name, $adminRoles))
                                            @continue @endif

                                        @if($role->name == 'admin' && $loggedUser->role != 'admin')
                                            @continue @endif

                                        <option value="{{ $role->name }}">{{ $role->description }}</option>                                                        
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary rounded w-100 ">{{__('Create User')}}</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>
</div>