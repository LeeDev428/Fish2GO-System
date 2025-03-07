<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();
        return Inertia::render('products', ['products' => $products]);
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);

        Product::create(['name' => $request->name]);

        return redirect()->back();
    }
}
