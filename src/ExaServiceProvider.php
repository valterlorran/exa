<?php

namespace ValterLorran\Exa;

use Illuminate\Support\ServiceProvider;

class ExaServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        include __DIR__.'/routes.php';
        $this->loadMigrationsFrom(__DIR__.'/migrations/');
        $this->loadViewsFrom(__DIR__.'/app/Views', 'exa');
        if(env('EXA_RECORD', false))
        {
            $this->app['Illuminate\Contracts\Http\Kernel']
                ->prependMiddleware('ValterLorran\Exa\App\Middlewares\ExaMiddleware');
        }
        if ($this->app->runningInConsole()) {
            $this->commands([
                'ValterLorran\Exa\App\Commands\Flush',
            ]);
        }
        $this->publishes([
            __DIR__.'/vuejs/dist' => public_path('exa'),
        ], 'public');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {

    }
}
