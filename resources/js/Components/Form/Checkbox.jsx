export default function Checkbox({ label = '', id = '', className = '', labelClassName = '', ...props }) {
    return (
        <div className="flex items-center">
            <input
                {...props}
                id={id}
                type="checkbox"
                className={
                    'w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-[#2F3746] '
                    + className
                }
            />
            <label htmlFor={id} className={'ms-2 text-sm font-medium ' + labelClassName}>
                {label}
            </label>
        </div>
    )
}