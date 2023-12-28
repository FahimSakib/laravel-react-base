export default function TextInputDefault({ label, id = '', type = 'text', className = '', labelClassName = '', error = false, ...props }) {
    return (
        <div>
            {label && <label htmlFor={id} className={'block mb-2 text-sm font-medium ' + labelClassName}>
                {label}
            </label>}
            <input
                {...props}
                id={id}
                type={type}
                className={
                    'block w-full p-2.5 bg-transparent border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 '
                    + (error ? 'border-red-500 ' : 'border-gray-300 dark:border-[#2F3746] ')
                    + className
                }
            />
        </div>
    )
}