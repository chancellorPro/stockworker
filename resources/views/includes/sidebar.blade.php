<?php
$adminMenu = ['box-log.index', 'box.index', 'user.index', 'box-stock.index',];
$main = 'block';
$admin = 'none';
$togglerName = 'Меню ящиков';
if(in_array(Route::current()->getName(), $adminMenu)) {
    $togglerName = 'Меню товаров';
    $main = 'none';
    $admin = 'block';
}
?>

<div class="col-md-3 left_col" style="{{ $main == 'block' ? 'background: #43667B;' : 'background: #1f587a;' }}">
    <div class="left_col scroll-view" style="{{ $main == 'block' ? 'background: #43667B;' : 'background: #1f587a;' }}">
        <div class="navbar nav_title" style="border: 0;">
            <a href="{{ url('/') }}" class="site_title">
{{--                <i class="fa fa-home"></i>--}}
                <img src="./home.png" style="margin: -10px 0 0 0;height: 50px;">

                <span>{{ config('app.name', 'Гарант-ПАК') }}</span>
            </a>
        </div>

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile">

            <div class="profile_info">
                <h2>@lang('Welcome'), {{ Auth::user()->name }}</h2>
            </div>
        </div>
        <!-- /menu profile quick info -->

        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu-section">
                <ul class="nav side-menu">
                    @if(Auth::user()->name == 'root')
                    <li>
                        <a href="#" id="toggle-menu" class="{{ $main == 'block' ? 'main' : '' }}">
                            <i class="fa fa-eject"></i>
                            <span><?=$togglerName?></span>
                        </a>
                    </li>
                    @endif
                    @foreach(config('menu') as $menuItem)
                        @if (isset($menuItem['child']))
                            @foreach($menuItem['child'] as $childItem)
                                <li class="main-menu" style="display:<?=$main?>">
                                    <a href="{{ route($childItem['route'], (array)@$childItem['route_params']) }}">
                                        <i class="fa {{ $childItem['icon'] }}"></i>
                                        {{ $childItem['name'] }}
                                    </a>
                                </li>
                            @endforeach
                        @endif
                    @endforeach

                    @foreach(config('menu') as $menuItem)
                        @if (isset($menuItem['boxes']))
                            @foreach($menuItem['boxes'] as $childItem)
                                <li class="box-menu" style="display:<?=$admin?>">
                                    <a href="{{ route($childItem['route'], (array)@$childItem['route_params']) }}">
                                        <i class="fa {{ $childItem['icon'] }}"></i>
                                        {{ $childItem['name'] }}
                                    </a>
                                </li>
                            @endforeach
                        @endif
                    @endforeach
                </ul>
            </div>
        </div>
        <!-- /sidebar menu -->

        <!-- /menu footer buttons -->
<!--        <div class="sidebar-footer hidden-small">
            <a>
                <span class="glyphicon"></span>
            </a>
            <a>
                <span class="glyphicon"></span>
            </a>
            <a>
                <span class="glyphicon"></span>
            </a>

            <a data-toggle="tooltip" data-placement="top" title="Logout" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </div>-->
        <!-- /menu footer buttons -->
    </div>
</div>
