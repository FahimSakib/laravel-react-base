import Chevron from "@/Components/Icons/Chevron"
import { Link } from "@inertiajs/react"
import { useState } from "react"

export default function NavLinkDropdown({ label = 'label', parentRouteName = '/', icon = null, subLinks = [], className = '' }) {
    const [open, setOpen] = useState(route().current(parentRouteName))

    return (
        <div>
            <button
                className={'flex w-full p-2 gap-2 rounded-md items-center hover:bg-gray-200/75 ' + (route().current(parentRouteName) ? 'bg-gray-200/75 ' : ' ') + className}
                onClick={() => setOpen(prev => !prev)}
            >
                <span
                    className={route().current(parentRouteName) ? 'text-[#6366f1] ' : 'text-[#6c737f] '}
                >
                    {icon}
                </span>
                <span
                    className={'flex font-semibold justify-between w-full items-center ' + (route().current(parentRouteName) ? 'text-black ' : 'text-[#6c737f] ')}
                >
                    {label}
                    <Chevron
                        direction={open ? 'M19.5 8.25l-7.5 7.5-7.5-7.5' : 'M8.25 4.5l7.5 7.5-7.5 7.5'}
                        className="w-4 h-4"
                    />
                </span>
            </button >
            {(open && subLinks.length !== 0) &&
                <div className="flex flex-col mt-1">
                    {subLinks.map((subLink, index) => (
                        <Link
                            href={route(subLink.routeName)}
                            className={'flex items-center gap-5 p-2 rounded-md hover:bg-gray-200/75 ' + subLink?.className}
                            key={index}
                        >
                            {route().current(subLink.routeName) &&
                                <span className="rounded-full ml-2 h-[6px] w-[6px] bg-[#6366f1]"></span>}
                            <span className={'text-sm font-medium ' + (route().current(subLink.routeName) ? 'text-black ' : 'ml-[34px] text-[#6c737f] ')}>
                                {subLink.label}
                            </span>
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}