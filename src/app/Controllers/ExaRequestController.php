<?php

namespace ValterLorran\Exa\App\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use ValterLorran\Exa\App\Models\ExaRequest;

class ExaRequestController extends Controller
{
    public function index()
    {
        return ExaRequest::paginate(50);
    }

    public function show($id, Request $req)
    {
        return ExaRequest::with('maps')->find($id);
    }

    public function update($id, Request $req)
    {
        $request = ExaRequest::find($id);
        $request->assertions = $req->get('assertions');
        $request->save();
        return $request;
    }

    public function destroy($id, ExaRequest $request)
    {
        $request = ExaRequest::find($id);
        $request->maps()->get()->map(function($map){
            $map->values()->delete();
        });
        $request->maps()->delete();
        $request->tests()->delete();
        $request->delete();
    }
}
