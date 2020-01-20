import React from 'react';

const Recipes = ({recipeses}) => {
    return ( 
        <div className="row">
            {recipeses.map(recipe=>(
                <div class="col-md-6">
                    <div class="dish">
                        <img src={recipe.recipeImage ?recipe.recipeImage.url:""} alt=""/>
                        <div class="dish_info">
                            <h6><span>{recipe.recipeTitle}</span><span>${recipe.recipePrice}</span></h6>
                            <p>{recipe.recipeDescription}</p>
                        </div>
                    </div>
                </div> 
            ))}
        </div>
     );
}
 
export default Recipes;