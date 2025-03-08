<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect('/login')->with('error', 'You must be logged in.');
        }

        if (Auth::user()->usertype !== 'admin') {
            return redirect('/dashboard')->with('error', 'Access denied.');
        }

        return $next($request);
    }
}
