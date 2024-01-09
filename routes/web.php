<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserManagementController;
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

    Route::patch('update-dark-mode', [ProfileController::class, 'updateDarkMode'])->name('update.dark.mode');
    Route::resource('users', UserManagementController::class);
    Route::patch('users/{user}/update-password', [UserManagementController::class, 'UpdatePassword'])->name('users.update.password');
    Route::post('users/bulk-delete', [UserManagementController::class, 'bulkDelete'])->name('users.bulk.delete');

    Route::get('product', function () {
        $data = 'product index';
        return Inertia::render('Home/Index', compact('data'));
    })->name('product.index');

    Route::get('product/create', function () {
        $data = 'product create';
        return Inertia::render('Home/Index', compact('data'));
    })->name('product.create');
});
