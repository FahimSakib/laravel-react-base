import Bars3CenterLeft from '@/Components/Icons/Bars3CenterLeft'
import React, { useState } from 'react'
import UserDropdown from './Components/UserDropdown'

const Header = ({ sideNavShow, setSideNavShow }) => {
    const [showUserDropdown, setShowUserDropdown] = useState(false)

    return (
        <div className="w-full h-16 fixed top-0 left-0 flex px-5 justify-between items-center bg-[#fffefe]/80 dark:bg-[#0f1220]/80 backdrop-blur-sm">
            <div className={`hidden md:flex gap-4 w-[236px] h-full items-center ${sideNavShow ? 'md:border-r dark:border-[#2F3746]' : ''}`}>
                <button onClick={() => setSideNavShow(!sideNavShow)} className="dark:text-[#9da4ae]">
                    <Bars3CenterLeft />
                </button>
                <img src="/assets/images/demos-logo-png-transparent.png" alt="logo" className="w-[120px] h-[50px] object-cover" />
            </div>
            <div className="hidden md:flex relative user-dropdown-container">
                <button onClick={() => setShowUserDropdown(prev => !prev)} >
                    <img
                        src="/assets/images/avatar.jpg"
                        alt="user name - avatar"
                        className="w-10 h-10 rounded-full p-[2px] ring-1 dark:ring-2"
                    />
                </button>
                {showUserDropdown && <UserDropdown setShowUserDropdown={setShowUserDropdown} />}
            </div>
        </div>
    )
}

export default Header