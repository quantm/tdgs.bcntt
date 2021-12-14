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

//Route::get('/',function (){
//    return view('welcome');
//});

// Authentication Routes...
Route::get('profile', ['uses' => '\App\Http\Controllers\ProfileController@index', 'as' => 'profile']);
Route::get('/', [App\Http\Controllers\Auth\AuthenticatedSessionController::class,'create']);
Route::get('dang-nhap', [
    'as' => 'dang-nhap',
    'uses' => 'App\Http\Controllers\Auth\AuthenticatedSessionController@create'
]);
Route::post('dang-nhap', [
    'as' => 'dang-nhap',
    'uses' => 'App\Http\Controllers\Auth\AuthenticatedSessionController@store'
]);

// Registration Routes...
Route::get('dang-ky', [
    'as' => 'dang-ky',
    'uses' => 'App\Http\Controllers\Auth\RegisteredUserController@store'
]);
Route::post('dang-ky', [
    'as' => 'dang-ky',
    'uses' => 'App\Http\Controllers\Auth\RegisteredUserController@store'
]);
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
