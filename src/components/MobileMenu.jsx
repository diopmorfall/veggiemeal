import React from 'react'

import SearchBar from './SearchBar'

export default function MobileMenu() {
    const meals = ["Saved recipes", "Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];
    return (
        <div className='w-full h-screen flex flex-col items-center py-16 bg-green-200 italic'>
            <SearchBar />
            <ul className='flex flex-col justify-around items-center list-none mt-16'>
                {meals.map(meal => 
                    <li key={meal} className='text-lg m-2 '>
                        {meal}
                    </li>
                )}
            </ul>
        </div>
    )
}
