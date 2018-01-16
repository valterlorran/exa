<?php
namespace ValterLorran\Exa\App\Models;

use Illuminate\Database\Eloquent\Model;

class ExaRequestParam extends Model
{
	protected $fillable = ['param'];
    
	public function request()
	{
		return $this->belongsTo(ExaRequest::class);
	}
}