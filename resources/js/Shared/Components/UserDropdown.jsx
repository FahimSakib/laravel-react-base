import Moon from "@/Components/Icons/Moon";
import User from "@/Components/Icons/User";
import ToggleButton from "@/Components/ToggleButton";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function UserDropdown({ setShowUserDropdown }) {
    const { auth } = usePage().props
    const [darkMode, SetDarkMode] = useState(auth?.user?.dark_mode || false)

    const toggleDarkMode = (e) => {
        SetDarkMode(prev => !prev)

        if (e.target.checked) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        if (auth && auth.user) {
            router.patch(route('update.dark.mode'), { dark_mode: e.target.checked }, {
                preserveScroll: true,
                preserveState: true,
            })
        }
    }

    const handleOutsideClick = (event) => {
        if (!event.target.closest('.user-dropdown-container')) {
            setShowUserDropdown(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [])

    const visitLink = (url) => {
        router.visit(url, {
            onSuccess: () => { setShowUserDropdown(false) }
        })
    }

    return (
        <div className="absolute top-12 right-0 w-52 rounded-lg bg-[#fffefe] dark:bg-[#111927] dark:text-[#EDF2F7] shadow-md divide-y dark:divide-[#2F3746]">
            <div className="p-4">
                <p className="capitalize">{auth?.user?.name}</p>
                <p className="text-sm text-[#6c737f] dark:text-[#9da4ae]">{auth?.user?.email}</p>
            </div>
            <div className="px-2 py-4">
                <button
                    onClick={() => visitLink(route('home'))}
                    className="flex w-full p-2 gap-3 rounded-md items-center hover:bg-gray-200/75 dark:hover:bg-white/5"
                >
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        <User />
                    </span>
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        Profile
                    </span>
                </button>
                <span className="flex w-full p-2 gap-3 rounded-md items-center">
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        <Moon />
                    </span>
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        Dark Mode
                    </span>
                    <ToggleButton handleOnChange={toggleDarkMode} size="small" className="ml-auto" checked={darkMode} />
                </span>
            </div>
            <div className="p-2">
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="w-full p-2 gap-3 rounded-md text-[#6c737f] dark:text-[#9da4ae] hover:bg-gray-200/75 dark:hover:bg-white/5"
                >
                    Logout
                </Link>
            </div>
        </div>
    )
}