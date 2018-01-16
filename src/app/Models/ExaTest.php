<?php
namespace ValterLorran\Exa\App\Models;

use Illuminate\Database\Eloquent\Model;

class ExaTest extends Model
{
	public function request()
	{
		return $this->belongsTo(ExaRequest::class);
	}
}