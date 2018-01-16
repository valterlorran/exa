<?php

namespace ValterLorran\Exa\App\Services;

use Illuminate\Http\Request;
use ValterLorran\Exa\App\Models\ExaRequest;
use ValterLorran\Exa\App\Models\ExaRequestMap;
use ValterLorran\Exa\App\Models\ExaRequestMapValue;

class RequestReader
{
	private $request;

	public static function create(Request $request)
	{
		return new Self($request);
	}

	public function __construct(Request $request)
	{
		$this->request = $request;
	}

	public function work()
	{
		$files = $this->request->allFiles();
		$data = $this->request->except(array_keys($files));

		$exa_request = ExaRequest::firstOrCreate([
			'url'=>$this->request->route()->compiled->getStaticPrefix(),
			'regex'=>$this->request->route()->compiled->getRegex(),
			'method'=>$this->request->method(),
		]);

		$path_variable = $this->request->route()->compiled->getPathVariables();

		foreach($path_variable as $variable)
		{
			$exa_request_map = $exa_request->maps()->firstOrCreate([
				'name'=>$variable,
				'is_param'=>true
			]);
		}
		
		foreach ($data as $key => $value) {
			$exa_request_map = $exa_request->maps()->firstOrCreate([
				'name'=>$key
			]);

			$exa_request_map->values()->save( new ExaRequestMapValue([
				'value'=>is_array($value) ? json_encode($value) : $value
			]));
		}
	}
}