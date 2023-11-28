import SingleNavLink from './Components/SingleNavLink'
import { navLinks } from './Components/NavLinks'
import NavLinkDropdown from './Components/NavLinkDropdown'

const SideNav = () => {
    return (
        <div className="w-64 min-h-[92%] max-h-[95%] px-3 py-5 fixed left-0 top-16 hidden md:block border-r dark:border-[#2F3746] overflow-y-auto dark:bg-[#0f1220]" >
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
        </div >
    )
}

export default SideNav