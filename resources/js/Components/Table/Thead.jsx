export default function Thead({ children, className = '' }) {
    return (
        <thead
            className={'text-xs uppercase text-[#2F3746] dark:text-[#9da4ae] bg-[#f8f9fa] dark:bg-[#1c2536] ' + className}
        >
            <tr>
                {children}
            </tr>
        </thead>
    )
}