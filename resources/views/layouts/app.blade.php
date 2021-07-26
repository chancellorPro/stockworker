<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Гарант-ПАК') }}</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
        <link href="{{ asset("app/css/vendor.css") }}" rel="stylesheet">
        <link href="{{ asset("app/css/main.css") }}" rel="stylesheet">

        @stack('stylesheets')

    </head>

    @php
        $moduleName = '';
        $pathParts = explode('/', Route::getCurrentRoute()->uri());
        if (!empty($pathParts[0])) {
            $moduleName = $pathParts[0];
        }
    @endphp
    <body class="nav-sm{{ !empty($moduleName) ? ' module-' . $moduleName : '' }}">
        <div class="container body">
            <div class="main_container">
                @if (Auth::check())

                    @include('includes/sidebar')
                    @include('includes/topbar')

                @endif

                @yield('main_container')

                @if (Auth::check())
                    @include('includes/footer')
                @endif
            </div>
        </div>

        @stack('globals')
        <script>
            var CSRF_TOKEN = '{{ csrf_token() }}';
        </script>
        <script src="{{ asset("app/js/vendor.js") }}"></script>
        <script src="{{ asset("app/js/main.js") }}"></script>
        <script src="{{ asset("app/js/html2canvas.js") }}"></script>
        <script type="text/javascript">
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': CSRF_TOKEN
                }
            });
        </script>

        @stack('scripts')

        @include('includes/notify')

        <script>
            if (/Android/i.test(navigator.userAgent)) {
                $('#stock-app').show().append(navigator.appName)
            }
        </script>
    </body>
</html>
