import React, { useState } from 'react'
import { Head } from '@inertiajs/react'
import Header from './Header'
import SideNav from './SideNav'
import MobileSideNav from './MobileSideNav'

const Layout = ({ children, title }) => {
    const [sideNavShow, setSideNavShow] = useState(true)
    const [mobileSideNavShow, setMobileSideNavShow] = useState(false)

    return (
        <div className="bg-[#fffefe] dark:bg-[#0f1220] dark:text-white">
            <Head title={title} />
            <Header sideNavShow={sideNavShow} setSideNavShow={setSideNavShow} setMobileSideNavShow={setMobileSideNavShow} />
            {sideNavShow && <SideNav />}
            {mobileSideNavShow && <MobileSideNav setMobileSideNavShow={setMobileSideNavShow} />}
            <div className={`p-5 pt-[84px] ${sideNavShow ? 'md:ml-[256px]' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout