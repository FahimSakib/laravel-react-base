export default function TextInput({ label = 'Label', id = '', type = 'text', className = '', labelClassName = '', error = false, ...props }) {
    return (
        <div>
            <label htmlFor={id} className={'block mb-2 font-medium ' + labelClassName}>
                {label}
            </label>
            <input
                {...props}
                id={id}
                type={type}
                className={
                    'block w-full p-4 bg-transparent border rounded-lg sm:text-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 '
                    + (error ? 'border-red-500 ' : 'border-gray-300 dark:border-[#2F3746] ')
                    + className
                }
            />
        </div>
    )
}
