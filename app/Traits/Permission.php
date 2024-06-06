<?php

namespace App\Traits;

trait Permission
{
    public function check_permission($permissionSlug)
    {
        $role = auth()->user()->load(['role:id,name', 'role.permissions:id,permission_slug'])->role;

        if ($role === null) {
            return false;
        }

        if ($role->name === 'SUPER ADMIN') {
            return true;
        }

        $permissions = $role->permissions->map(function ($item) {
            return $item->permission_slug;
        });

        return $permissions->contains($permissionSlug);
    }
}
