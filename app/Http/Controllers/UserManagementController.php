<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\MatchPassword;
use App\Traits\Uploadable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;

class UserManagementController extends Controller
{
    use Uploadable;

    public function index()
    {
        $users = User::simplePaginate(10);

        return Inertia::render('UserManagement/Index', compact('users'));
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

        User::create($data);

        return redirect()->back()->with('success', 'User created successfully');
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        $user = User::find($id);

        return Inertia::render('UserManagement/Edit', compact('user'));
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'name'   => 'required|string|max:255',
            'email'  => ['required', 'string', 'email', 'max:255', Rule::unique(User::class)->ignore($id)],
            'avatar' => 'nullable|file|mimes:jpeg,jpg,png|max:2024'
        ]);

        $user          = User::find($id);
        $currentAvatar = $user->avatar;

        $data = [
            'name'   => $request->name,
            'email'  => $request->email,
            'phone'  => $request->phone,
            'status' => $request->status
        ];

        if ($request->hasFile('avatar')) {
            $fileName       = uniqid('avatar_');
            $data['avatar'] = $this->upload_file($request->file('avatar'), 'avatars', $fileName);
        }

        $user->update($data);

        if (!empty($currentAvatar) && $request->hasFile('avatar')) {
            $this->delete_file($currentAvatar, 'avatars');
        }

        return redirect()->back()->with('success', 'User updated successfully');
    }

    public function destroy(string $id)
    {
        $user   = User::find($id);
        $avatar = $user->avatar;

        $user->delete();

        if (!empty($avatar)) {
            $this->delete_file($avatar, 'avatars');
        }

        return redirect()->back()->with('success', 'User deleted successfully');
    }

    public function UpdatePassword(Request $request, string $id)
    {
        $user = User::find($id);

        $request->validate([
            'current_password' => ['required', new MatchPassword($user->password)],
            'password'         => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user->update([
            'password'         => Hash::make($request->password),
            'default_password' => false,

        ]);

        return redirect()->back()->with('success', 'Password updated successfully');
    }
}
