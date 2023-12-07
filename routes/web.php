<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

// 
Route::get('/', function () {
    return Inertia::render('Dashboard/Index');
})->name('dashboard');

Route::get('home/home', function () {
    return Inertia::render('Home/Index');
})->name('home.two');
// 


Route::get('product', function () {
    $data = 'product index';
    return Inertia::render('Home/Index', compact('data'));
})->name('product.index');

Route::get('product/create', function () {
    $data = 'product create';
    return Inertia::render('Home/Index', compact('data'));
})->name('product.create');


// custom auth
Route::get('login', function () {
    return Inertia::render('CustomAuth/Login');
})->name('login');
// custom auth