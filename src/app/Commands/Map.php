<?php

namespace ValterLorran\Exa\App\Commands;

use Illuminate\Console\Command;
use \ValterLorran\Exa\App\Models\ExaRequest;

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

        $requests = ExaRequest::whereTest(true)->with('maps')->get();
        $bar = $this->output->createProgressBar(count($requests));

        foreach ($requests as $request) {
        	
    		$bar->advance();
        }

		$bar->finish();
		$this->line();
    }
}
