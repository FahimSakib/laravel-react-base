import Bars3CenterLeft from '@/Components/Icons/Bars3CenterLeft'
import React from 'react'

const Header = ({ sideNavShow, setSideNavShow }) => {
    return (
        <div className="w-full h-[50px] fixed top-0 left-0 flex px-5 justify-between items-center backdrop-blur-sm">
            <div className={`hidden md:flex gap-4 w-[236px] ${sideNavShow ? 'md:border-r dark:border-[#2F3746]' : ''}`}>
                <button onClick={() => setSideNavShow(!sideNavShow)} className="dark:text-[#9da4ae]">
                    <Bars3CenterLeft />
                </button>
                <img src="/demos-logo-png-transparent.png" alt="logo" className="w-[120px] h-[50px] object-cover" />
            </div>
            <div className="rounded-full border border-black h-1/2">Hello</div>
        </div>
    )
}

export default Header