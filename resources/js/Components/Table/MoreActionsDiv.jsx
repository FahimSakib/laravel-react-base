import { useEffect } from "react";

export default function MoreActionsDiv({ children, setShowMoreActions, id }) {
    const handleOutsideClick = (event) => {
        if (!event.target.closest(`.table-more-actions-${id}`)) {
            setShowMoreActions(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div className="absolute top-0 right-5 w-36 p-2 bg-[#fffefe] dark:bg-[#111927] shadow-md dark:shadow-xl rounded-lg">
            {children}
        </div>
    )
}