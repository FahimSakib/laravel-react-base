export default function Tr({ children, className = '' }) {
    return (
        <tr
            className={
                'text-[#111927] dark:text-[#edf2e7] border-b dark:border-[#2F3746] hover:bg-[#111927]/5 dark:hover:bg-[#f3f4f6]/5 '
                + className}
        >
            {children}
        </tr>
    )
}