<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;

class PizzaController extends Controller
{
    public function index(): Response
    {
        $pizzas = Pizza::all();

        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas,
        ]);
    }

    public function edit(Pizza $pizza): Response
    {
        return Inertia::render('Pizzas/Edit', [
            'pizza' => $pizza,
        ]);
    }

    public function update(Pizza $pizza, Request $request): void
    {
        $pizza->update([
            'status' => $request->status
        ]);
    }

    public function destroy($id)
    {
        // Find the pizza by its IDs
        // $pizza = Pizza::find($id);
        // dd($pizza);
        Pizza::destroy($id);
        return Redirect::to('/pizzas');

        // error_log('Some message here.');
        // $pizzas = Pizza::all();

        // return Inertia::render('Pizzas/All', [
        //     'pizzas' => $pizzas,
        // ]);

        // Check if the post exists
        // if ($id) {
        //     echo $pizza;
        //     return redirect()->route('pizzas.index')->with('success', 'Post deleted successfully!');
        // };

        // return redirect()->route('pizzas.index')->with('error', 'Post not found!');
    }
}