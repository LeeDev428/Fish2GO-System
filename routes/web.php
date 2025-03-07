<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

use App\Http\Controllers\InventoryController;
Route::get('/inventory', [InventoryController::class, 'index'])->name('inventory.index');
Route::post('/inventory', [InventoryController::class, 'store'])->name('inventory.store');
Route::delete('/inventory/{inventory}', [InventoryController::class, 'destroy'])->name('inventory.destroy');

use App\Http\Controllers\ProductController;
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');


use App\Http\Controllers\RoleController;
Route::get('/role-management', [RoleController::class, 'index'])
    ->name('role.management');






require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
