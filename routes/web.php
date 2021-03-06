<?php

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

Route::view('/', 'page.home')->name('home.Jeager');
Route::view('/about', 'page.about')->name('about.Jeager');
Route::view('/solution', 'page.solutionJeager')->name('solution.Jeager');
Route::view('/solution-OEE', 'page.solutionOEE')->name('solution.oee');
Route::view('/solution-EMS', 'page.solutionEMS')->name('solution.ems');

Route::get('/news', 'NewsController@getCURL')->name('news.Jeager');

Route::get('/admin-dash', 'PostController@index')->name('admin.dash');
Route::get('/admin-detail/{formTable}', 'PostController@detail')->name('admin.detail');
Route::delete('delete/{formTable}', 'PostController@delete')->name('delete');

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Auth::routes(['register' => false]);
Auth::routes();


Route::post('/submit', 'FormController@submit')->name('submit');
