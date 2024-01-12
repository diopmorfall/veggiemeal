import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import SearchBar from './SearchBar'

export default function HeaderMenu() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuOptions = ["Saved recipes", "Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-full h-screen flex flex-col items-center py-16 bg-transparent italic
            lg:flex-row lg:h-4/5 lg:w-4/5 lg:justify-end lg:py-4 border-2 border-black'>
            {windowWidth < 1024 ? <SearchBar /> : ''}
            <ul className='flex flex-col justify-around items-center list-none mt-8 lg:flex-row lg:mt-0 lg:font-semibold'>
                {menuOptions.map(option => 
                    <li key={option} className='text-lg m-2 '>
                        {option}
                    </li>
                )}
            </ul>
        </div>
    )
}
