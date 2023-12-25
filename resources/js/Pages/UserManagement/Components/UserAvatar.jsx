export default function UserAvatar({ user }) {
    if (user.avatar) {
        return (
            <img
                src={`/storage/avatars/${user.avatar}`}
                alt={user.name}
                className="w-11 h-11 rounded-full"
            />
        )
    }

    const nameArray = user.name.split(' ', 2)
    let nameFirstLetters

    if (nameArray.length === 1) {
        nameFirstLetters = nameArray[0][0]
    } else {
        nameFirstLetters = nameArray[0][0] + nameArray[1][0]
    }

    return (
        <div
            className="w-11 h-11 bg-[#d6ccfa] rounded-full flex items-center justify-center"
        >
            <p className={'text-black uppercase font-semibold ' + (nameArray.length > 1 ? 'text-lg ' : 'text-xl ')}>
                {nameFirstLetters}
            </p>
        </div>
    )
}