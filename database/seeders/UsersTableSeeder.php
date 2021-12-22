<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Ban CNTT',
            'email' => 'tdgs.bcntt@gmail.com',
            'password' => bcrypt('123456789'),
        ]);
    }
}
