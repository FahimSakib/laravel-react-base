<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\Uploadable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserManagementController extends Controller
{
    use Uploadable;

    public function index()
    {
        return Inertia::render('UserManagement/Index');
    }

    public function create()
    {
        return Inertia::render('UserManagement/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
            'avatar'   => 'nullable|file|mimes:jpeg,jpg,png|max:2024'
        ]);

        $data = [
            'name'             => $request->name,
            'email'            => $request->email,
            'phone'            => $request->phone,
            'password'         => Hash::make($request->password),
            'default_password' => true,
            'status'           => $request->status
        ];

        if ($request->hasFile('avatar')) {
            $fileName       = uniqid('avatar_');
            $data['avatar'] = $this->upload_file($request->file('avatar'), 'avatars', $fileName);
        }

        $user = User::create($data);
        dd($user);
        dd($data);
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
