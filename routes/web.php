<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth'])->group(function () {

    Route::get('telegram', 'ActionLog\IndexController@sendMessage')->name('telegram');
    Route::resource('box', 'Box\IndexController');
    Route::resource('product', 'Product\IndexController');
    Route::resource('action-log', 'ActionLog\IndexController');
    Route::resource('stock', 'Stock\IndexController');
    Route::resource('plan', 'Plan\IndexController');
    Route::get('history', 'Plan\HistoryController@index')->name('history');
    Route::resource('customer', 'Customer\IndexController');
    Route::resource('user', 'User\IndexController');
    Route::resource('material', 'Material\IndexController');
    Route::resource('product-material', 'ProductMaterial\IndexController');
    Route::resource('color', 'Color\IndexController');

    Route::post('export', 'ActionLog\IndexController@reportSend')->name('export');
//    Route::post('send', 'ActionLog\IndexController@reportSend')->name('send');
    Route::get('viber-send', 'ActionLog\IndexController@send_message')->name('viber-send');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
