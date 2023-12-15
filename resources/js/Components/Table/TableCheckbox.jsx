export default function TableCheckbox({ id = '', className = '', ...props }) {
    return (
        <div className="flex items-center">
            <input
                {...props}
                id={id}
                type="checkbox"
                className={
                    'w-[18px] h-[18px] text-[#6366f1] bg-transparent border-2 border-[#6c737f] dark:border-[#a0aec0] checked:border-0 rounded-md focus:ring-0 focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent cursor-pointer '
                    + className
                }
            />
            <label htmlFor={id} className="sr-only">
                checkbox
            </label>
        </div>
    )
}
