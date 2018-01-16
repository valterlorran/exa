<?php
namespace ValterLorran\Exa\App\Models;

use Illuminate\Database\Eloquent\Model;

class ExaRequest extends Model
{
	protected $fillable = ['url', 'method', 'regex', 'assertions', 'acting_user', 'acting_user_sql'];

	public function getAssertionsAttribute($value)
    {
    	if(!$value){
    		return json_decode('[]');
    	}
    	return json_decode($value);
    }

	public function maps()
	{
		return $this->hasMany(ExaRequestMap::class);
	}

	public function params()
	{
		return $this->hasMany(ExaRequestParam::class);
	}
	
	public function tests()
	{
		return $this->hasMany(ExaTest::class);
	}
}