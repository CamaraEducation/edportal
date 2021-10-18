@extends('layout.auth')
@section('title', 'Reset Pass')
@section('content')
    @php $notice = notice($page);
    @endphp
    <div class="forny-container">
        <div class="forny-inner">
            <div class="forny-form text-center">
                <div class="mb-8 text-center forny-logo">
                    <img src="/assets/img/small.png">
                </div>
                <div class="reset-form d-block">
                    <form class="reset-password-form">
                        <h4 class="mb-5">{{$notice['subject']}}</h4>
                        <p class="mb-10">
                            {{$notice['message']}}
                        </p>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <a href="{{$notice['link']}}" class="btn btn-primary btn-block">{{$notice['button']}}</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection