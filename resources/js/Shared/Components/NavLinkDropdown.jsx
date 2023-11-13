import { Link } from "@inertiajs/react"
import { useState } from "react"

export default function NavLinkDropdown({ label = 'label', parentRouteName = '/', icon = null, subLinks = [], className = '' }) {
    const [open, setOpen] = useState(route().current(parentRouteName))

    // console.log(open)
    // console.log(route().current(parentRouteName))

    return (
        <>
            <button
                className={'flex w-full p-2  gap-2 rounded-md items-center hover:bg-gray-100 ' + (route().current(parentRouteName) ? 'bg-gray-100 ' : ' ') + className}
                onClick={() => setOpen(prev => !prev)}
            >
                <span
                    className={route().current(parentRouteName) ? 'text-[#6366f1]' : ''}
                >
                    {icon}
                </span>
                <span
                    className="font-medium"
                >
                    {label}
                </span>
            </button>
            {(open && subLinks.length !== 0) &&
                <div className="flex flex-col space-y-3">
                    {subLinks.map((subLink, index) => (
                        <Link
                            href={route(subLink.routeName)}
                            className={'p-2 rounded-md hover:bg-gray-100 ' + (route().current(subLink.routeName) ? 'bg-gray-100 ' : ' ') + subLink?.className}
                            key={index}
                        >
                            {subLink.label}
                        </Link>
                    ))}
                </div>
            }
        </>
    )
}