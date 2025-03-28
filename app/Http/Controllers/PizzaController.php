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
        Pizza::destroy($id);
        return Redirect::to('/pizzas');
    }

    // public function create(Pizza $pizza, Request $request)
    // {
    //     return Redirect::to('/create');
    // }

    public function create($data)
    {
        dd($data);
        // $newPizza = Pizza::create([
        //     'title' => $request->input('title'),
        //     'content' => $request->input('content'),
        // ]);
        // dd($newPizza);

        // return Redirect::to('/create');
    }
}