import Bars3CenterLeft from '@/Components/Icons/Bars3CenterLeft'
import React from 'react'

const Header = ({ sideNavShow, setSideNavShow }) => {
    return (
        <div className="w-full h-[50px] fixed top-0 left-0 flex px-5 justify-between items-center z-10 bg-white">
            <button onClick={() => setSideNavShow(!sideNavShow)} className="hidden md:block">
                <Bars3CenterLeft />
            </button>
            <div className="rounded-full border border-black h-1/2">Hello</div>
        </div>
    )
}

export default Header