<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('app');
});

Route::get('/u', function()
{
  //change our view name to the view we created in a previous step
  return View::make('app');
});

Route::get('riskProfile', 'TacController@riskProfile');
Route::get('graph', 'TacController@graph');


Route::resource('tac', 'TacController');
