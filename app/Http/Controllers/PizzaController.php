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

    public function create(Request $request)
        // 'id' => rand(11111, 99999),
        //     'user_id' => rand(1, 10),
        //     'size' => ['Small', 'Medium', 'Large', 'Extra-Large'][rand(0, 3)],
        //     'crust' => ['Regular', 'Thin', 'Garlic'][rand(0, 2)],
        //     'status' => ['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready'][rand(0, 4)],
        //     'toppings' => $toppings,
        {

            //both this version (#1) and version #2 work

            //#1 old version
            // $pizza = new Pizza;
            // $pizza->id = $request->id;
            // $pizza->size = $request->size;
            // $pizza->user_id = $request->user_id;
            // $pizza->crust = $request->crust;
            // $pizza->status = $request->status;
            // $pizza->toppings = [$request->toppings];
            // dd($pizza);

            //#2 new version
            $pizza = Pizza::create([
                'id' => $request->id,
                'size' => $request->size,
                'user_id' => $request->user_id,
                'crust' => $request->crust,
                'status' => $request->status,
                'toppings' => [$request->toppings],
            ]);
            // // dd($newPizza);
            $pizza->save();
            // dd($newPizza);

            return Redirect::to('/pizzas');
        }
        
    
}