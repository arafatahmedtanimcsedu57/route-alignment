<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RouteRealignment extends Model
{
    protected $fillable = [ 'user_number','outlet_number','outlet_type','distribution_house_code','distributor_code','area','territory','type','cursor','interval','offset' ];
}
