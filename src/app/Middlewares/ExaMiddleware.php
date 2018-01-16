<?php

namespace ValterLorran\Exa\App\Middlewares;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use ValterLorran\Exa\App\Services\RequestReader;
use Illuminate\Support\Facades\Route;
class ExaMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $guard = null)
    {
        return $next($request);
    }

    public function terminate(Request $request)
    {
        RequestReader::create($request)->work();
    }
}
