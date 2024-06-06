<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;

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
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::patch('update-dark-mode', [ProfileController::class, 'updateDarkMode'])->name('update.dark.mode');
    Route::resource('users', UserManagementController::class);
    Route::patch('users/{user}/update-password', [UserManagementController::class, 'UpdatePassword'])->name('users.update.password');
    Route::post('users/bulk-delete', [UserManagementController::class, 'bulkDelete'])->name('users.bulk.delete');
    Route::resource('permissions', PermissionController::class)->except(['create', 'show']);
    Route::post('permissions/bulk-delete', [PermissionController::class, 'bulkDelete'])->name('permissions.bulk.delete');
    Route::resource('roles', RoleController::class);
    Route::post('roles/bulk-delete', [RoleController::class, 'bulkDelete'])->name('roles.bulk.delete');
});
