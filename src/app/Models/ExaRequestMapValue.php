<?php
namespace ValterLorran\Exa\App\Models;

use Illuminate\Database\Eloquent\Model;

class ExaRequestMapValue extends Model
{
	protected $fillable = ['value'];
	public function map()
	{
		return $this->belongsTo(ExaRequestMap::class);
	}
}