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
    <style>
        table {
            border-collapse: collapse;
            border-left: 1px solid black;
        }

        table, th, td {
            border-top: 1px solid black;
            border-left: 0;
            border-right: 1px solid black;
            border-bottom: 0;
            padding: 5px;
        }

        textarea {
            height: 30px;
        }
    </style>
</head>
<body>
<div class="container body">
    <div class="main_container">
        @if(empty($hide_button))
            <div class="row">
                <div class="col-sm-2">
                    {{-- Send report --}}
                    @include('common.buttons.save', [
                        'route' => 'send',
                        'id' => 'send-report',
                        'showPreloader' => true,
                        'route_params' => [
                            'has_parent' => false,
                            'orderType' => $orderType,
                            'dateFrom' => $dateFrom,
                            'dateTo' => $dateTo,
                            'direction' => $direction,
                            'template' => $template,
                        ],
                        'name' => __('Send report'),
                        'fa_class' => 'fa-save',
                        'dataset' => [
                            'method' => 'POST',
                        ],
                    ])
                </div>
                <div class="col-sm-10">
                    <textarea class="col-sm-6" id="canvas-data"></textarea>
                </div>
            </div>
            <br><br>
        @endif
        @yield('main_container')
    </div>
</div>
</body>
</html>
