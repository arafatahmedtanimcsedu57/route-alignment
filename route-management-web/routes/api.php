<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('rewrite-routes', 'RouteRealignmentsController@index');
 
Route::get('rewrite-routes/{id}', 'RouteRealignmentsController@show');
  
Route::post('rewrite-routes', 'RouteRealignmentsController@store');
 
Route::put('rewrite-routes/{id}', 'RouteRealignmentsController@update');
 
Route::delete('rewrite-routes/{id}', 'RouteRealignmentsController@delete');