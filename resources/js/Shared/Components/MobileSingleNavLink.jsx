import { router } from "@inertiajs/react";

export default function MobileSingleNavLink({ label = 'label', routeName = '/', icon = null, className = '', setMobileSideNavShow }) {
    const visitLink = (url) => {
        router.visit(url, {
            onSuccess: () => { setMobileSideNavShow(false) }
        })
    }

    return (
        <button
            onClick={() => visitLink(route(routeName))}
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
        </button>
    )
}