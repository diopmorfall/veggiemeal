import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({
    id,
    title,
    servings,
    readyInMinutes,
    image,
}) {
    const navigate = useNavigate();
    const baseUri = 'https://spoonacular.com/recipeImages/';

    function getRecipeData() {
        navigate(`/recipe/${id}`);
    }

    return (
        <div onClick={getRecipeData}
            className="w-2/3 h-[350px] flex flex-col items-center justify-between text-center pb-4 my-6 rounded-xl border-2
            md:w-full md:text-lg lg:w-full"
        >
            <img className='w-full h-1/2 rounded-t-xl' src={`${baseUri}${image}`} alt={title} />
            <h2 className='font-bold px-4'>{title}</h2>
            <p>{servings} servings</p>
            <h4>{readyInMinutes} minutes</h4>
        </div>
    );
}
