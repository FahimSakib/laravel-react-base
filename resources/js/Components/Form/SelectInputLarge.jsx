export default function SelectInputLarge({ label = 'Label', id = '', className = '', labelClassName = '', error = false, options = [], ...props }) {
    return (
        <div>
            <label htmlFor={id} className={'block mb-2 font-medium ' + labelClassName}>
                {label}
            </label>
            <select
                {...props}
                id={id}
                className={
                    'block w-full p-4 bg-transparent border rounded-lg sm:text-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-[#111927] '
                    + (error ? 'border-red-500 ' : 'border-gray-300 dark:border-[#2F3746] ')
                    + className
                }
            >
                <option value="">Select an option</option>
                {options.map(option => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
