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
            width: 95%;
            height: 95%;
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
        .modal-body{
            padding: 0;
        }
        #report_path{
            padding: 5px;
            font-weight: bold;
            font-size: 15px;
        }
    </style>
</head>
<body>
<div class="container body">
    <div class="main_container">
        @if(empty($hide_button))
            <div>
                {{-- Send report --}}
                <form method="POST" class="form-horizontal">
                    <div class="col-sm-2">
                        {{ csrf_field() }}
                        @include('common.buttons.save', [
                            'route' => 'send',
                            'name' => __('Send report'),
                            'showPreloader' => true,
                            'route_params' => [
                                'dateFrom' => $dateFrom,
                                'dateTo' => $dateTo,
                                'direction' => $direction,
                                'template' => $template,
                            ],
                            'dataset' => [
                                'dismiss' => 0,
                                'reload' => 0
                            ],
                        ])
                    </div>

                    <div class="col-sm-10">
                        <input id="report_path" class="form-control col-sm-12" />
                    </div>

                    <div style="display: none;">
                        <textarea class="col-sm-6" id="canvas-data" name="canvas"></textarea>
                    </div>
                </form>

            </div>
            <br><br>
        @endif
        @yield('main_container')
    </div>
</div>
</body>
</html>
