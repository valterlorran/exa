<?php

namespace ValterLorran\Exa\App\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use ValterLorran\Exa\App\Models\ExaRequest;
use ValterLorran\Exa\App\Models\ExaRequestMap;

class ExaRequestMapController extends Controller
{
	private $exa_request;

	public function __construct(Request $request)
	{
		$headers = apache_request_headers();
		$request_id = array_get($headers, 'request_id', null);
		$this->exa_request = ExaRequest::find($request_id);
		$req = $this->exa_request;
		$this->middleware(function ($request, $next) use($req) {
			if(!$req){
				return redirect('/exa/request');
			}
		    return $next($request);
		});
	}

    public function index()
    {
    	return $this->exa_request->maps;
    }

    public function update($id, Request $request)
    {
    	$map = $this->exa_request->maps()->find($id);
    	$map->map = $request->get('map');
    	$map->save();
    	return $map;
    }

    public function destroy($id)
    {
    	$map = ExaRequestMap::find($id);
    	$map->values()->delete();
    	$map->delete();
    }
}
