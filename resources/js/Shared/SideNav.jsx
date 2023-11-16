import SingleNavLink from './Components/SingleNavLink'
import { navLinks } from './Components/NavLinks'
import NavLinkDropdown from './Components/NavLinkDropdown'

const SideNav = () => {
    const toggleDarkMode = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className="w-64 min-h-[92%] max-h-[95%] px-3 py-10 fixed left-0 top-16 hidden md:block border-r dark:border-[#2F3746] overflow-y-auto dark:bg-[#0f1220]" >
            <div className="flex flex-col space-y-3">
                {navLinks.map((navLink, index) => {
                    if (navLink.subLinks) {
                        return (
                            <NavLinkDropdown
                                label={navLink.label}
                                parentRouteName={navLink.parentRouteName}
                                icon={navLink.icon}
                                subLinks={navLink.subLinks}
                                key={index}
                            />
                        )
                    }
                    return (
                        <SingleNavLink
                            label={navLink.label}
                            routeName={navLink.routeName}
                            icon={navLink?.icon}
                            className={navLink?.className}
                            key={index}
                        />)
                })}
            </div>

            <label className="relative inline-flex items-center cursor-pointer mt-20">
                <input type="checkbox" defaultValue="" className="sr-only peer" onChange={(e) => toggleDarkMode(e)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Dark Mode
                </span>
            </label>

        </div >
    )
}

export default SideNav