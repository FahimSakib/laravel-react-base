import React, { useEffect, useState } from 'react'
import { Head, usePage } from '@inertiajs/react'
import Header from './Header'
import SideNav from './SideNav'
import MobileSideNav from './MobileSideNav'
import toast from 'react-hot-toast'

const Layout = ({ children, title }) => {
    const { auth, flash } = usePage().props
    const [sideNavShow, setSideNavShow] = useState(true)
    const [mobileSideNavShow, setMobileSideNavShow] = useState(false)

    useEffect(() => {
        if (flash) {
            if (flash.success) {
                toast.success(flash.success)
            }
            if (flash.error) {
                toast.error(flash.error)
            }
        }
    }, [flash.success, flash.error])

    useEffect(() => {
        if (auth && auth.user) {
            if (auth.user.dark_mode) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }, [])

    return (
        <div className="bg-[#fffefe] dark:bg-[#0f1220] dark:text-white">
            <Head title={title} />
            <Header sideNavShow={sideNavShow} setSideNavShow={setSideNavShow} setMobileSideNavShow={setMobileSideNavShow} />
            {sideNavShow && <SideNav />}
            {mobileSideNavShow && <MobileSideNav setMobileSideNavShow={setMobileSideNavShow} />}
            <div className={`p-5 pt-[84px] min-h-screen ${sideNavShow ? 'md:ml-[256px]' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout