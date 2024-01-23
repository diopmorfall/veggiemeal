import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import openMenuIcon from "../assets/icons/open_menu_icon.svg";
import closeMenuIcon from "../assets/icons/close_menu_icon.svg";

import HeaderMenu from './HeaderMenu';

export default function Header() {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='fixed w-full flex flex-col items-center justify-center bg-green-200 lg:h-16 '>
            <nav className='w-full h-full flex flex-row justify-between items-center p-5 md:py-6 lg:pl-8'>
                <h2 
                    onClick={() => navigate('/')}
                    className='italic font-semibold text-lg sm:text-xl lg:text-2xl lg:mr-12'
                >
                    veggiemeal.com
                </h2>
                {windowWidth < 1024
                    ? (
                        <div onClick={toggleMenu} className='lg:hidden'>
                            {isMobileMenuOpen ? (
                                    <img
                                        src={closeMenuIcon}
                                        className='w-7 md:w-8'
                                    />
                                ) : (
                                    <img
                                        src={openMenuIcon}
                                        className='w-7 md:w-8'
                                    />
                            )}
                        </div>
                    ) : (<HeaderMenu />)
                }
            </nav>
            {isMobileMenuOpen && (windowWidth < 1024) ? <HeaderMenu /> : ''}
        </header>
    )
}
