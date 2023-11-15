import ComputerDesktop from '@/Components/Icons/ComputerDesktop'
import Home from '@/Components/Icons/Home'
import { Link } from '@inertiajs/react'
import SingleNavLink from './Components/SingleNavLink'
import Bars3CenterLeft from '@/Components/Icons/Bars3CenterLeft'
import { navLinks } from './Components/NavLinks'
import NavLinkDropdown from './Components/NavLinkDropdown'

const SideNav = () => {
    return (
        <div className="w-64 min-h-[92%] max-h-[95%] p-3 py-10 fixed left-0 top-[50px] hidden md:block border-r overflow-y-auto" >
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