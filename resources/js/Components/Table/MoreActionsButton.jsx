import { Link } from "@inertiajs/react";

export default function MoreActionsButton({ label = 'label', icon = null, className = '', ...props }) {
    return (
        <button
            {...props}
            className={'flex w-full p-2 gap-2 rounded-md items-center hover:bg-[#111927]/5 dark:hover:bg-[#f3f4f6]/5 ' + className}
        >
            {icon} {label}
        </button>
    )
}