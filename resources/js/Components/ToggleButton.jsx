export default function ToggleButton({ handleOnChange, size = 'default', label = null }) {
    let heightWidth
    let afterPosition
    let afterHeightWidth

    if (size === 'large') {
        heightWidth = 'w-14 h-7'
        afterPosition = 'after:top-0.5 after:start-[4px]'
        afterHeightWidth = 'after:h-6 after:w-6'
    } else if (size === 'default') {
        heightWidth = 'w-11 h-6'
        afterPosition = 'after:top-[2px] after:start-[2px]'
        afterHeightWidth = 'after:h-5 after:w-5'
    } else {
        heightWidth = 'w-9 h-5'
        afterPosition = 'after:top-[2px] after:start-[2px]'
        afterHeightWidth = 'after:h-4 after:w-4'
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" onChange={handleOnChange} />
            <div className={`${heightWidth} bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute ${afterPosition} after:bg-white after:border-gray-300 after:border after:rounded-full ${afterHeightWidth} after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`} />
            {label && <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </span>}
        </label>
    )
}