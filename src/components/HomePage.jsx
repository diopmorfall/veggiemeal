import React from 'react'
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar'

export default function HomePage() {
    const navigate = useNavigate()
    const meals = ["Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];

    return (
        <main className='h-screen flex flex-col items-center justify-evenly italic'>
            <h2 
                onClick={() => navigate('/')}
                className='font-semibold text-3xl mt-16'
            >
                veggiemeal.com
            </h2>
            <p>Look for vegetarian and vegan recipes...</p>
            <SearchBar />
            <p>...or search them by course...</p>
            <div className='card-courses grid grid-cols-2 gap-6 w-4/5 h-1/4 border-2 border-green-500 p-2'>
                {meals.map(meal => 
                    <div key={meal} className='w-full rounded-lg bg-blue-400'>
                        
                    </div>    
                )}
            </div>
            <p>...or look at the latest recipes</p>
        </main>
    )
}
