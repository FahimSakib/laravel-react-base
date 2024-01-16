import { usePage } from "@inertiajs/react"

export default function UserAvatar({ }) {
    const { auth } = usePage().props

    if (auth.user.avatar) {
        return (
            <img
                src={`/storage/avatars/${auth.user.avatar}`}
                alt={auth.user.name}
                className="w-10 h-10 rounded-full p-[2px] ring-1 dark:ring-2"
            />
        )
    }

    const nameArray = auth.user.name.split(' ', 2)
    let nameFirstLetters

    if (nameArray.length === 1) {
        nameFirstLetters = nameArray[0][0]
    } else {
        nameFirstLetters = nameArray[0][0] + nameArray[1][0]
    }

    return (
        <div
            className="w-10 h-10 rounded-full p-[2px] ring-1 dark:ring-2"
        >
            <p className={'flex items-center justify-center w-full h-full bg-[#d6ccfa] rounded-full text-black uppercase font-semibold ' + (nameArray.length > 1 ? 'text-lg ' : 'text-xl ')}>
                {nameFirstLetters}
            </p>
        </div>
    )
}