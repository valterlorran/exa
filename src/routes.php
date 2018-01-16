<?php
Route::get('exa/home', function(){
	return view('exa::main');
});
Route::resource('exa/request', 'ValterLorran\Exa\App\Controllers\ExaRequestController');
Route::resource('exa/request-map', 'ValterLorran\Exa\App\Controllers\ExaRequestMapController');

Route::get('exa/test/{id}/{id2}/{id3}', function($id, $id1, $id2){
	return [];
});