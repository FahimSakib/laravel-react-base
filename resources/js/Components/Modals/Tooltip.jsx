export default function Tooltip({ label, TooltipText }) {
    return (
        <div className="relative">
            <div className="w-fit peer cursor-pointer text-[#6c737f] dark:text-[#a0aec0]">
                {label}
            </div>
            <div className="absolute -top-6 left-5 px-2 py-1 invisible peer-hover:visible bg-[#f8f9fa] dark:bg-[#1c2536] dark:text-[#edf2e7] text-sm rounded-md shadow-md dark:shadow-lg border dark:border-[#2F3746]">
                <span>{TooltipText}</span>
            </div>
        </div>
    )
}