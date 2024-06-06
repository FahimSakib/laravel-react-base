<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Rules\MatchPassword;
use App\Traits\Permission;
use App\Traits\Uploadable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;

class UserManagementController extends Controller
{
    use Uploadable, Permission;

    public function index()
    {
        if (!$this->check_permission('user-index')) {
            return Inertia::render('Error/AccessDenied');
        }

        $users = User::with('role:id,name')->simplePaginate(10);

        return Inertia::render('UserManagement/Index', compact('users'));
    }

    public function create()
    {
        if (!$this->check_permission('user-create')) {
            return Inertia::render('Error/AccessDenied');
        }

        $roles = Role::all();

        return Inertia::render('UserManagement/Create', compact('roles'));
    }

    public function store(Request $request)
    {
        if (!$this->check_permission('user-create')) {
            return redirect()->back()->with('error', 'Access denied');
        }

        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:' . User::class,
            'role_id'  => 'required',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'avatar'   => 'nullable|file|mimes:jpeg,jpg,png|max:2024'
        ]);

        $data = [
            'name'             => $request->name,
            'email'            => $request->email,
            'phone'            => $request->phone,
            'role_id'          => $request->role_id,
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
        if (!$this->check_permission('user-edit')) {
            return Inertia::render('Error/AccessDenied');
        }

        $user  = User::find($id);
        $roles = Role::all();

        return Inertia::render('UserManagement/Edit', compact('user', 'roles'));
    }

    public function update(Request $request, string $id)
    {
        if (!$this->check_permission('user-edit')) {
            return redirect()->back()->with('error', 'Access denied');
        }

        $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => ['required', 'string', 'email', 'max:255', Rule::unique(User::class)->ignore($id)],
            'role_id' => 'required',
            'avatar'  => 'nullable|file|mimes:jpeg,jpg,png|max:2024'
        ]);

        $user          = User::find($id);
        $currentAvatar = $user->avatar;

        $data = [
            'name'    => $request->name,
            'email'   => $request->email,
            'phone'   => $request->phone,
            'role_id' => $request->role_id,
            'status'  => $request->status
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
        if (!$this->check_permission('user-delete')) {
            return redirect()->back()->with('error', 'Access denied');
        }

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
        if (!$this->check_permission('user-edit')) {
            return redirect()->back()->with('error', 'Access denied');
        }

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

    public function bulkDelete(Request $request)
    {
        if (!$this->check_permission('user-delete')) {
            return redirect()->back()->with('error', 'Access denied');
        }

        $users = User::whereIn('id', $request['ids'])->get();

        foreach ($users as $user) {
            $avatar = $user->avatar;

            $user->delete();

            if (!empty($avatar)) {
                $this->delete_file($avatar, 'avatars');
            }
        }

        return redirect()->back()->with('success', (count($request['ids']) > 1 ? 'Users' : 'User') . ' deleted successfully');
    }
}
