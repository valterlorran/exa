<?php
namespace ValterLorran\Exa\App\Models;

use Illuminate\Database\Eloquent\Model;

class ExaRequestMap extends Model
{
	protected $fillable = ['name', 'map', 'is_param'];

	public function getMapAttribute($value)
    {
    	if(!$value){
    		return json_decode('{}');
    	}
    	return json_decode($value);
    }

	public function request()
	{
		return $this->belongsTo(ExaRequest::class);
	}

	public function values()
	{
		return $this->hasMany(ExaRequestMapValue::class);
	}
}