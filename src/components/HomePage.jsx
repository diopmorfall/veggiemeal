import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchBar from './SearchBar'
import RecipeCard from './RecipeCard'

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const API_KEY = import.meta.env.VITE_API_KEY;

    const navigate = useNavigate()
    const meals = ["Breakfast", "Main course", "Appetizer", "Side dish", "Dessert", "Drink"];

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function setRecipeArrayLength(){
        return windowWidth < 768
            ? 4
            : windowWidth < 1024
                ? 6
                : 8
    }

    async function getRandomRecipes() {
        setIsLoading(true);
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&diet=vegetarian|vegan&number=${setRecipeArrayLength()}`
        ).catch(error => console.log(error))
        setRecipes(res.data.results);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getRandomRecipes();
    }, []);

    return (
        <main className='h-min relative top-16 flex flex-col items-center justify-between italic'>
            <h2 
                onClick={() => navigate('/')}
                className='font-semibold text-3xl mt-8 mb-8 md:mt-24 md:mb-12 md:text-[40px]'
            >
                veggiemeal.com
            </h2>
            <p className='text-lg font-semibold md:text-lg md:my-4'>Look for vegetarian and vegan recipes...</p>
            <SearchBar />
            <p className='text-lg font-semibold md:text-lg md:my-4'>...or search them by course...</p>
            <div className='card-courses grid grid-cols-2 gap-6 w-4/5 p-2 my-6 md:grid-cols-3 md:w-4/5 lg:grid-cols-3 lg:w-3/4 lg:gap-x-16 lg:gap-y-10'>
                {meals.map(meal => 
                    <div key={meal} className='w-full h-[200px] flex flex-col justify-between items-center pb-4 rounded-xl bg-blue-400
                        md:h-[250px]
                    '>
                        <img src="" alt="Meal image" />
                        <p className='md:text-xl lg:text-2xl'>{meal}</p>
                    </div>    
                )}
            </div>
            <p className='text-lg font-semibold my-6 md:text-lg'>...or look at the latest recipes</p>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error ? <p className='text-red-400'>Error: {error}</p> : ''}
            {!isLoading && recipes.length > 0 ?
                (
                    <div className='w-full flex flex-col items-center md:w-[90%] md:grid md:grid-cols-3 md:gap-x-8 lg:w-[85%] lg:grid lg:grid-cols-4 lg:gap-x-10 lg:py-6'>
                        {recipes.map(recipe => 
                            <RecipeCard
                                key={recipe.id}
                                id={recipe.id}
                                title={recipe.title}
                                servings={recipe.servings}
                                readyInMinutes={recipe.readyInMinutes}
                                image={recipe.image}
                            />
                        )}
                    </div>
                ) : <p className='text-center px-8 font-semibold text-red-400 md:px-16 md:text-lg'>
                        We're sorry we couldn't give you recipes suggestions. Please search for the recipes you're interest to
                    </p>
            }
        </main>
    )
}
