import { Link } from "@inertiajs/react";

export default function MoreActionsLink({ label = 'label', routeName, icon = null, className = '' }) {
    return (
        <Link
            href={routeName ? route(routeName) : ''}
            className={'flex w-full p-2 gap-2 rounded-md items-center hover:bg-[#111927]/5 dark:hover:bg-[#f3f4f6]/5 ' + className}
        >
            {icon} {label}
        </Link>
    )
}