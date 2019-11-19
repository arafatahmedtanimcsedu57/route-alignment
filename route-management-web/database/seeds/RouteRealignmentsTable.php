<?php

use Illuminate\Database\Seeder;
use App\RouteRealignment;

class RouteRealignmentsTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            RouteRealignment::create([
                'user_number'=>$faker->unique()->randomNumber(9) ,
                'outlet_number'=>$faker->unique()->randomNumber(9),
                'outlet_type'=>$faker->name,
                'distribution_house_code'=>$faker->name,
                'distributor_code'=>$faker->name,
                'area'=>$faker->country,
                'territory'=>$faker->city,

                'type'=>$faker->randomElement($array = array (0, 1)),
                'cursor'=>$faker->numberBetween($min = 1, $max = 7),
                'interval'=>$faker->randomElement($array = array (7, 14)),
                'offset'=>$faker->randomElement($array = array (0, 1, 2)),
            ]);
        }
    }
}
