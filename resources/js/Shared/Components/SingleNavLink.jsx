import { Link } from "@inertiajs/react";

export default function SingleNavLink({ label = 'label', routeName = '/', icon = null, className = '' }) {
    return (
        <Link href={route(routeName)} className={'flex w-full p-2 gap-2 rounded-md items-center hover:bg-gray-200/75 ' + (route().current(routeName) ? 'bg-gray-200/75 ' : ' ') + className}>
            <span className={route().current(routeName) ? 'text-[#6366f1] ' : 'text-[#6c737f] '}>
                {icon}
            </span>
            <span className={'font-semibold ' + (route().current(routeName) ? 'text-black ' : 'text-[#6c737f] ')}>
                {label}
            </span>
        </Link >
    )
}