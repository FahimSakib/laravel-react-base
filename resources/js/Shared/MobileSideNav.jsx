import MobileNavLinkDropdown from "./Components/MobileNavLinkDropdown"
import MobileSingleNavLink from "./Components/MobileSingleNavLink"
import { navLinks } from "./Components/NavLinks"

export default function MobileSideNav({ setMobileSideNavShow }) {
    return (
        <>
            <div className="block md:hidden fixed left-0 top-16 w-full h-full bg-[#fffefe]/80 dark:bg-[#0f1220]/80 backdrop-blur-sm"></div>
            <div className="block md:hidden fixed left-0 top-16 w-52 min-h-[92%] max-h-[95%] px-3 py-5 overflow-y-auto bg-[#fffefe] dark:bg-[#0f1220] shadow-md">
                <div className="flex flex-col space-y-3">
                    {navLinks.map((navLink, index) => {
                        if (navLink.subLinks) {
                            return (
                                <MobileNavLinkDropdown
                                    label={navLink.label}
                                    parentRouteName={navLink.parentRouteName}
                                    icon={navLink.icon}
                                    subLinks={navLink.subLinks}
                                    setMobileSideNavShow={setMobileSideNavShow}
                                    key={index}
                                />
                            )
                        }
                        return (
                            <MobileSingleNavLink
                                label={navLink.label}
                                routeName={navLink.routeName}
                                icon={navLink?.icon}
                                className={navLink?.className}
                                setMobileSideNavShow={setMobileSideNavShow}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}