import { Link } from "@inertiajs/react";

export default function SingleNavLink({ label = 'label', routeName = '/', icon = null, className = '' }) {
    return (
        <Link href={route(routeName)} className={'flex w-full p-2 gap-2 rounded-md items-center hover:bg-gray-100 ' + (route().current(routeName) ? 'bg-gray-100 ' : ' ') + className}>
            <span className={route().current(routeName) ? 'text-[#6366f1]' : ''}>
                {icon}
            </span>
            <span className="font-medium">
                {label}
            </span>
        </Link>
    )
}