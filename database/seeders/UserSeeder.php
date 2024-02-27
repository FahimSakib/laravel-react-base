<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'             => 'Admin',
            'email'            => 'admin@mail.com',
            'role_id'          => 1,
            'password'         => Hash::make('password'),
            'default_password' => true,
        ]);
    }
}
