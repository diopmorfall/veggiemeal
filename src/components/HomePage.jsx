import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar'
import RecipeCard from './RecipeCard'

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    const navigate = useNavigate()
    const meals = ["Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];

    async function getRandomRecipes() {
        try {
            setIsLoading(true);
            const response = await fetch(
                `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&diet=vegetarian|vegan`
            );
            const data = await response.json();
            console.log(data.results);
            setRecipes(recipes);
        } catch (e) {
            setError(e.message);
        }
        setIsLoading(false);
      }
    
      useEffect(() => {
        //getRandomRecipes();
      }, []);

    return (
        <main className='h-min relative top-16 flex flex-col items-center justify-between italic'>
            <h2 
                onClick={() => navigate('/')}
                className='font-semibold text-3xl mt-8 mb-6 md:mt-24 md:mb-12 md:text-[40px]'
            >
                veggiemeal.com
            </h2>
            <p className='text-lg md:text-lg md:my-4'>Look for vegetarian and vegan recipes...</p>
            <SearchBar />
            <p className='text-lg md:text-lg md:my-4'>...or search them by course...</p>
            <div className='card-courses grid grid-cols-2 gap-6 w-4/5 p-2 my-6 lg:grid-cols-3 lg:w-3/5'>
                {meals.map(meal => 
                    <div key={meal} className='w-full h-[200px] flex flex-col justify-between items-center pb-4 rounded-xl bg-blue-400
                        md:h-[300px]
                    '>
                        <img src="" alt="Meal image" />
                        <p className='md:text-xl lg:text-2xl'>{meal}</p>
                    </div>    
                )}
            </div>
            <p className='text-lg my-6 md:text-lg'>...or look at the latest recipes</p>
            
        </main>
    )
}
