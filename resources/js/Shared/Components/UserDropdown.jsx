import Moon from "@/Components/Icons/Moon";
import User from "@/Components/Icons/User";
import ToggleButton from "@/Components/ToggleButton";
import { Link } from "@inertiajs/react";

export default function UserDropdown({ }) {
    const toggleDarkMode = (e) => {
        if (e.target.checked) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className="absolute top-12 right-0 w-52 rounded-lg bg-[#fffefe] dark:bg-[#111927] dark:text-[#EDF2F7] shadow-md divide-y dark:divide-[#2F3746]">
            <div className="p-4">
                <p className="capitalize">fahim sakib</p>
                <p className="text-sm text-[#6c737f] dark:text-[#9da4ae]">fahim@mail.com</p>
            </div>
            <div className="px-2 py-4">
                <Link
                    href=""
                    className="flex w-full p-2 gap-3 rounded-md items-center hover:bg-gray-200/75 dark:hover:bg-white/5"
                >
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        <User />
                    </span>
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        Profile
                    </span>
                </Link>
                <span className="flex w-full p-2 gap-3 rounded-md items-center">
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        <Moon />
                    </span>
                    <span className="text-[#6c737f] dark:text-[#9da4ae]">
                        Dark Mode
                    </span>
                    <ToggleButton handleOnChange={toggleDarkMode} size="small" className="ml-auto" />
                </span>
            </div>
        </div>
    )
}