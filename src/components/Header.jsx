import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import openMenuIcon from "../assets/icons/open_menu_icon.svg";
import closeMenuIcon from "../assets/icons/close_menu_icon.svg";

import HeaderMenu from './HeaderMenu';

export default function Header() {
    const navigate = useNavigate()
    const [isMenuShown, setIsMenuShown] = useState(false);

    const toggleMenu = () => {
        setIsMenuShown(!isMenuShown)
    }

    return (
        <header className='fixed w-full flex flex-col items-center justify-center bg-green-200'>
            <nav className='w-full flex flex-row justify-between items-center py-4 px-5 lg:p-6'>
                <h2 
                    onClick={() => navigate('/')}
                    className='italic font-semibold text-lg sm:text-xl lg:text-2xl'
                >
                    veggiemeal.com
                </h2>
                <div onClick={toggleMenu}>
                    {isMenuShown ? (
                    <img
                        src={closeMenuIcon}
                        className='w-7 md:w-8 lg:hidden'
                    />
                    ) : (
                        <img
                            src={openMenuIcon}
                            className='w-7 md:w-8 lg:hidden'
                        />
                    )}
                </div>
            </nav>
            {isMenuShown && <HeaderMenu />}
        </header>
    )
}
