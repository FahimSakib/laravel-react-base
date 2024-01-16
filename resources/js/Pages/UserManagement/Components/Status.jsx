export default function Status({ status }) {
    if (status === 'active') {
        return (
            <span className="bg-[#22c55e]/[.16] px-[6px] py-[2px] text-[#118d57] dark:text-[#77ed8b] text-xs capitalize rounded">
                {status}
            </span>
        )
    } else {
        return (
            <span className="bg-[#ff5630]/[.16] px-[6px] py-[2px] text-[#b71d18] dark:text-[#ffac82] text-xs capitalize rounded">
                {status}
            </span>
        )
    }
}