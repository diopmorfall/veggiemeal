import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import RecipeCard from './RecipeCard';

export default function MatchingRecipes() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [matchingRecipes, setMatchingRecipes] = useState([]);
    const { query } = useParams();
    const API_KEY = import.meta.env.VITE_API_KEY;
  
    async function getMatchingRecipes() {
        setIsLoading(true);
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&diet=vegetarian|vegan&query=${query}&number=8`
        ).catch(error => console.log(error))
        setMatchingRecipes(res.data.results);
        setIsLoading(false);
    }
  
    useEffect(() => {
      getMatchingRecipes();
    }, [query]);
  
    return (
      <section className='h-min relative top-16 flex flex-col items-center justify-between'>
        <h2 className='font-semibold text-3xl mt-8 mb-8 md:mt-16 md:mb-12 md:text-[40px]'>
            Matching recipes
        </h2>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && error ? <div>Error: {error}</div> : ''}
        {!isLoading && matchingRecipes.length > 0 ? (
                <div className='w-full flex flex-col items-center md:w-[90%] md:grid md:grid-cols-3 md:gap-x-8 lg:w-[85%] lg:grid lg:grid-cols-4 lg:gap-x-10 lg:py-6'>
                    {matchingRecipes.map(recipe => 
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
            ) : 
            <p>
                We're sorry, but it was not possible to get the recipes related to
                your query. Please try again later, or look for another recipe (todo: add an
                image for this error)
            </p>
        }
      </section>
    );
}