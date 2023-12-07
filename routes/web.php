<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');

    Route::get('product', function () {
        $data = 'product index';
        return Inertia::render('Home/Index', compact('data'));
    })->name('product.index');

    Route::get('product/create', function () {
        $data = 'product create';
        return Inertia::render('Home/Index', compact('data'));
    })->name('product.create');
});
