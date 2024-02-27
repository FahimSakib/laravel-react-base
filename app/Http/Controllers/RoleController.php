<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::with(['user:id,name', 'permissions:id'])->simplePaginate(10);

        return Inertia::render('Role/Index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $permissionsByModule = Permission::all()->groupBy('module_name');

        return Inertia::render('Role/Create', compact('permissionsByModule'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $role = Role::create([
            'name'       => $request['name'],
            'created_by' => $request->user()->id
        ]);

        $role->permissions()->sync($request['permission_ids']);

        return redirect()->route('roles.index')->with('success', 'Role created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $permissionsByModule         = Permission::all()->groupBy('module_name');
        $role                        = Role::with('permissions:id,module_name')->find($id);
        $selectedPermissionsByModule = $role->permissions->groupBy('module_name');

        return Inertia::render('Role/Edit', compact('permissionsByModule', 'role', 'selectedPermissionsByModule'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $role = Role::find($id);

        $role->update(['name' => $request['name']]);
        $role->permissions()->sync($request['permission_ids']);

        return redirect()->back()->with('success', 'Role updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Role::find($id)->delete();

        return redirect()->back()->with('success', 'Role deleted successfully');
    }
}
