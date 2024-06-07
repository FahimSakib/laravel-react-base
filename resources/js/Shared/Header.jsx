import React, { useState } from 'react'
import UserDropdown from './Components/UserDropdown'
import UserAvatar from './Components/UserAvatar'
import Bars3 from '@/Components/Icons/bars3'

const Header = ({ sideNavShow, setSideNavShow, setMobileSideNavShow }) => {
    const [showUserDropdown, setShowUserDropdown] = useState(false)

    return (
        <div className="w-full h-16 fixed top-0 left-0 flex px-5 justify-between items-center bg-[#fffefe]/80 dark:bg-[#0f1220]/80 backdrop-blur-sm">
            <div className={`hidden md:flex w-[236px] h-full items-center ${sideNavShow ? 'md:border-r dark:border-[#2F3746]' : ''}`}>
                <button onClick={() => setSideNavShow(!sideNavShow)} className="text-[#6c737f] dark:text-[#9da4ae]">
                    <Bars3 />
                </button>
                <img src="/assets/images/lr-base.png" alt="logo" className="w-[100px] h-[50px] object-cover" />
            </div>
            <div className="flex md:hidden gap items-center">
                <button onClick={() => setMobileSideNavShow(prev => !prev)} className="text-[#6c737f] dark:text-[#9da4ae]">
                    <Bars3 />
                </button>
                <img src="/assets/images/lr-base.png" alt="logo" className="w-[100px] h-[50px] object-cover" />
            </div>
            <div className="hidden md:flex relative user-dropdown-container">
                <button onClick={() => setShowUserDropdown(prev => !prev)} >
                    <UserAvatar />
                </button>
                {showUserDropdown && <UserDropdown setShowUserDropdown={setShowUserDropdown} />}
            </div>
        </div>
    )
}

export default Header