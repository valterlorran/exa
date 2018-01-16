<?php

namespace ValterLorran\Exa\App\Commands;

use Illuminate\Console\Command;

class Flush extends Command
{
    protected $signature = 'exa:flush';

    protected $description = 'Clears all the data used by Exa.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        
    }
}
