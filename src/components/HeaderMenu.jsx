import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar'
import searchMenuIcon from "../assets/icons/search_icon.svg";
import closeMenuIcon from "../assets/icons/close_menu_icon.svg";

export default function HeaderMenu() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSearchbarShown, setIsSearchbarShown] = useState(false)
    const menuOptions = ["Saved recipes", "Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='w-full h-screen flex flex-col items-center py-16 bg-transparent italic
                lg:flex-row-reverse lg:h-4/5 lg:w-4/5 lg:py-4'>
                {windowWidth < 1024
                    ? <SearchBar />
                    : <img
                    src={searchMenuIcon}
                    className='w-6 ml-10 xl:w-7'
                    onClick={() => setIsSearchbarShown(true)}
                    />
                }
                <ul className='flex flex-col justify-around items-center list-none mt-8 lg:flex-row lg:mt-0 lg:font-semibold'>
                    {menuOptions.map(option => 
                        <li key={option} className='text-lg m-2 xl:text-xl xl:ml-4'>
                            {option}
                        </li>
                    )}
                </ul>
            </div>
            {isSearchbarShown && 
                <div className='floating-searchbar absolute top-32 w-[600px] h-[250px] mx-[27%] flex justify-center items-center bg-green-100 rounded-xl'>
                    <img
                        src={closeMenuIcon}
                        onClick={() => setIsSearchbarShown(false)}
                        className='absolute top-4 right-4'
                    />
                    <SearchBar />
                </div>
            }
        </>
    )
}
