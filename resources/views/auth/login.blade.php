@extends('layouts.pages.config')

@section('main_container')
    <style>
        #stock-app a {
            color: blue;
            font-size: 25px;
            padding: 5px;
            font-weight: bold;
            background: #cdf086;
            position: absolute;
            top: 0;
            height: 58px;
            left: 0;
            width: 100%;
        }
    </style>
    <div class="login_wrapper">
        <div class="animate form login_form">
            <section class="login_content">

                <div class="card-header">{{ __('Login') }}</div>
                <div id="stock-app">
                    <a style="display: none;" href="{{ asset("app/stock-app.apk") }}">
                        Download {app_name} for Android
                    </a>
                </div>

                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group row">
                        <label for="email" class="col-lg-4 col-xs-4 col-sm-4 col-md-4">{{ __('Login') }}</label>

                        <div class="col-md-6">
                            <input id="email" type="text"
                                   class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                                   value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password" class="col-lg-4 col-xs-4 col-sm-4 col-md-4">{{ __('Password') }}</label>

                        <div class="col-md-6">
                            <input id="password" type="password"
                                   class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                   name="password" required>

                            @if ($errors->has('password'))
                                <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="offset-md-4">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Login') }}
                            </button>

                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
@endsection
