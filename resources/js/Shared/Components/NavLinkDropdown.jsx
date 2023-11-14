import Chevron from "@/Components/Icons/Chevron"
import { Link } from "@inertiajs/react"
import { useState } from "react"

export default function NavLinkDropdown({ label = 'label', parentRouteName = '/', icon = null, subLinks = [], className = '' }) {
    const [open, setOpen] = useState(route().current(parentRouteName))

    return (
        <div>
            <button
                className={'flex w-full p-2 gap-2 rounded-md items-center hover:bg-gray-100 ' + (route().current(parentRouteName) ? 'bg-gray-100 ' : ' ') + className}
                onClick={() => setOpen(prev => !prev)}
            >
                <span
                    className={route().current(parentRouteName) ? 'text-[#6366f1]' : ''}
                >
                    {icon}
                </span>
                <span
                    className="flex font-medium justify-between w-full items-center"
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
                            className={'flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 ' + subLink?.className}
                            key={index}
                        >
                            {route().current(subLink.routeName) &&
                                <span className="rounded-full ml-2 h-[6px] w-[6px] bg-[#6366f1]"></span>}
                            <span className={route().current(subLink.routeName) ? '' : 'ml-[30px]'}>
                                {subLink.label}
                            </span>
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}