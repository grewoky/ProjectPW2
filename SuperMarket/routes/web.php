<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FirebaseController;

Route::get('/create', [FirebaseController::class, 'createDocument']);
Route::get('/get', [FirebaseController::class, 'getDocument']);

Route::get('/', function () {
    return view('welcome');
});
