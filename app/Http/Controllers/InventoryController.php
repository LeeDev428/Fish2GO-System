<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function index()
    {
        return Inertia::render('inventory', [
            'items' => Inventory::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:1',
        ]);

        Inventory::create($request->all());

        return redirect()->back();
    }

    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return redirect()->back();
    }
}
