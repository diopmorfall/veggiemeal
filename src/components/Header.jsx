import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import openMenuIcon from "../assets/icons/open_menu_icon.svg";
import closeMenuIcon from "../assets/icons/close_menu_icon.svg";

import MobileMenu from './MobileMenu';

export default function Header() {
    const navigate = useNavigate()
    const [isMenuShown, setIsMenuShown] = useState(true);

    return (
        <header className='fixed w-full flex flex-col items-center justify-center bg-green-200'>
            <nav className='w-full flex flex-row justify-between items-center py-4 px-4'>
                <h2 
                    onClick={() => navigate('/')}
                    className='italic font-semibold text-lg'
                >
                    veggiemeal.com
                </h2>
                {isMenuShown ? (
                    <img
                        src={closeMenuIcon}
                        className='w-7 hidden sm:w-9 md:hidden'
                    />
                ) : (
                    <img
                        src={openMenuIcon}
                        className='w-7 sm:w-9 md:hidden'
                    />
                )}
                
            </nav>
            {!isMenuShown ? '' : <MobileMenu />}
        </header>
    )
}
