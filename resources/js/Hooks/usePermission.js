import { usePage } from "@inertiajs/react";

export default function usePermission() {
    const { role } = usePage().props

    const permission = (name) => {
        if (role === null) {
            return false
        }

        if (role.name === 'SUPER ADMIN') {
            return true
        }

        const permissions = role.permissions.map(item => item.permission_slug)

        if (permissions.includes(name)) {
            return true
        }

        return false
    }

    return [permission]
}