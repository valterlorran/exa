<?php

namespace ValterLorran\Exa\App\Commands;

use Illuminate\Console\Command;

class Map extends Command
{
    protected $signature = 'exa:tests';

    protected $description = 'Tests all the end-point recorded.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        
    }
}
