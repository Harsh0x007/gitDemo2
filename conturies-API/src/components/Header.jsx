import React from 'react'
import moon from '../assets/moon.png';

function Header() {
    return (
        <header className='shadow-md flex items-center justify-between  max-w-[1520px] mx-auto px-[145px] py-4'>
            <h2 className='text-3xl font-bold'>Where in the world?</h2>
            <div className='flex items-center cursor-pointer gap-2'>
                <img src={moon} alt="Moon Icon" className="w-6 h-6" />
                <span className='font-medium'>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header
