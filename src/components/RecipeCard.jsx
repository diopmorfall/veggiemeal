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
        <div className="w-2/3 h-[350px] flex flex-col items-center justify-around text-center p-4 rounded-xl border-2 md:w-1/2 md:text-lg lg:w-1/4">
            <img className='w-full' src={`${baseUri}${image}`} alt={title} />
            <h2 className='font-bold'>Cannellini Bean and Asparagus Salad with Mushrooms</h2>
            <p>Servings: {servings}</p>
            <h4>Ready in {readyInMinutes} minutes</h4>
            <p className="" onClick={getRecipeData}>
                See how to cook it
            </p>
        </div>
    );
}
