<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $permissions = Permission::simplePaginate(10);

        return Inertia::render('Permission/Index', compact('permissions'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        foreach ($request['permissionNamesSlugs'] as $key => $permission) {
            $data[] = [
                'module_name'     => strtolower($request->module_name),
                'permission_name' => $permission['permission_name_' . $key],
                'permission_slug' => $permission['permission_slug_' . $key],
                'created_at'      => Carbon::now()
            ];
        }

        Permission::insert($data);

        return redirect()->back()->with('success', (count($data) > 1 ? 'Permissions' : 'Permission') . ' created successfully');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'module_name'     => 'required',
            'permission_name' => 'required',
            'permission_slug' => 'required'
        ]);

        $request->merge(['module_name' => strtolower($request->module_name)]);

        Permission::find($id)->update($request->all());

        return redirect()->back()->with('success', 'Permission updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
