import { Link } from "@inertiajs/react";

export default function SingleNavLink({ label = 'label', routeName = '/', icon = null, className = '' }) {
    return (
        <Link
            href={route(routeName)}
            className={
                'flex w-full p-2 gap-2 rounded-md items-center hover:bg-gray-200/75 dark:hover:bg-white/5 '
                + (route().current(routeName) ? 'bg-gray-200/75 dark:bg-white/5 ' : ' ')
                + className
            }
        >
            <span
                className={route().current(routeName) ? 'text-[#6366f1] ' : 'text-[#6c737f] dark:text-[#9da4ae] '}
            >
                {icon}
            </span>
            <span
                className={
                    'font-semibold '
                    + (route().current(routeName) ? 'text-black dark:text-[#EDF2F7] ' : 'text-[#6c737f] dark:text-[#9da4ae] ')
                }
            >
                {label}
            </span>
        </Link>
    )
}