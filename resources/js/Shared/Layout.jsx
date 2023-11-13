import React, { useState } from 'react'
import { Head } from '@inertiajs/react'
import Header from './Header'
import SideNav from './SideNav'

const Layout = ({ children, title }) => {
    const [sideNavShow, setSideNavShow] = useState(true)
    // console.log(sideNavShow)
    return (
        <div className="">
            <Head title={title} />
            <Header sideNavShow={sideNavShow} setSideNavShow={setSideNavShow} />
            {/* {sideNavShow ? 'true' : 'false'} */}
            {sideNavShow && <SideNav />}
            <div className={`bg-[#fafbfc] p-5 mt-[50px] ${sideNavShow ? 'md:ml-[224px] md:rounded-tl-[25px]' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout