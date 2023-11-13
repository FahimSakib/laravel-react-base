import React, { useState } from 'react'
import { Head } from '@inertiajs/react'
import Header from './Header'
import SideNav from './SideNav'

const Layout = ({ children, title }) => {
    const [sideNavShow, setSideNavShow] = useState(true)

    return (
        <div className="bg-[#fffefe]">
            <Head title={title} />
            <Header sideNavShow={sideNavShow} setSideNavShow={setSideNavShow} />
            {sideNavShow && <SideNav />}
            <div className={`p-5 mt-[50px] ${sideNavShow ? 'md:ml-[256px]' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout