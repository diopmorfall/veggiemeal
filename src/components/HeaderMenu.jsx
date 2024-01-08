import React from 'react'
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar'

export default function HeaderMenu() {
    const navigate = useNavigate();
    const menuOptions = ["Saved recipes", "Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];

    //todo: desktop menu

    return (
        <div className='w-full h-screen flex flex-col items-center py-16 bg-green-200 italic lg:flex-row justify-around'>
            <SearchBar />
            <ul className='flex flex-col justify-around items-center list-none mt-16'>
                {menuOptions.map(option => 
                    <li key={option} className='text-lg m-2 '>
                        {option}
                    </li>
                )}
            </ul>
        </div>
    )
}
