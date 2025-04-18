<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PizzaController;
use App\Http\Controllers\PublicPizzaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
 
Route::get('/create', function () {
    return Inertia::render('Create');
})->middleware(['auth', 'verified'])->name('create');

Route::get('/order/{pizza}', [PublicPizzaController::class, 'show'])->name(name: 'public.pizzas.show');

Route::middleware('auth')->group(function () {
    Route::get('/pizzas', [PizzaController::class, 'index'])->name('pizzas.index');
    Route::get('/pizzas/{pizza}', [PizzaController::class, 'edit'])->name('pizzas.edit');
    Route::patch('/pizzas/{pizza}', [PizzaController::class, 'update'])->name('pizzas.update');
    Route::delete('/pizzas/{pizza}', [PizzaController::class, 'destroy'])->name('pizzas.destroy');
    Route::post('/pizzas', [PizzaController::class, 'create'])->name('pizzas.create');
    Route::get('/pizzas/{user}/query', [PizzaController::class, 'query'])->name('pizzas.query');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';