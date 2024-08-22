import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";

import RecipeListItem from "./recipe-list-item/RecipeListItem";

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => setRecipes(result));
    }, []);

    
    return (
        <div className="wrap clearfix">

            <div className="row">

                <section className="content three-fourth">
                    <div className="cwrap">
                        <header className="s-title">
                            <h2 className="ribbon bright">All recipes</h2>
                        </header>
                        {recipes.length > 0 
                            ? recipes.map(recipe => <RecipeListItem key={recipe._id} {...recipe} />)
                            : < h2 id="no-recipes">No recipes yet</h2>
                        }
                    </div >
                </section>
            </div>

        </div>
    );
}


