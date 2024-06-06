<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Traits\Permission as TraitsPermission;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PermissionController extends Controller
{
    use TraitsPermission;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (!$this->check_permission('permission-index')) {
            return Inertia::render('Error/AccessDenied');
        }

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
        if (!$this->check_permission('permission-create')) {
            return redirect()->back()->with('error', 'Access denied');
        }

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
        if (!$this->check_permission('permission-edit')) {
            return redirect()->back()->with('error', 'Access denied');
        }

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
        if (!$this->check_permission('permission-delete')) {
            return redirect()->back()->with('error', 'Access denied');
        }

        Permission::find($id)->delete();

        return redirect()->back()->with('success', 'Permission deleted successfully');
    }

    public function bulkDelete(Request $request)
    {
        if (!$this->check_permission('permission-delete')) {
            return redirect()->back()->with('error', 'Access denied');
        }

        Permission::whereIn('id', $request['ids'])->delete();

        return redirect()->back()->with('success', (count($request['ids']) > 1 ? 'Permissions' : 'Permission') . ' deleted successfully');
    }
}
