import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";

export default function RecipeSubmit() {
    const navigate = useNavigate();

    const submitRecipeSubmitHandler = async (e) => {
        e.preventDefault();

        const recipeData = Object.fromEntries(new FormData(e.currentTarget));
        
        try {
            await recipeService.create(recipeData);

            navigate(`/recipes`);
        } catch (err) {
            console.log(err);          
        }
    };

    return (
        <div className="wrap clearfix">
            {/*breadcrumbs*/}
            <div className="wrap clearfix">
                {/*breadcrumbs*/}
                <nav className="breadcrumbs">

                </nav>
                {/*//breadcrumbs*/}
                {/*row*/}
                <div className="row">
                    <header className="s-title">
                        <h1>Add a new recipe</h1>
                    </header>
                    {/*content*/}
                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form onSubmit={submitRecipeSubmitHandler}>
                                <section>
                                    <div className="f-row">
                                        <div className="full">
                                            <label htmlFor="rec-title">Recipe title:</label>
                                            <input type="text" id="title" name="title" placeholder="Recipe title" />
                                        </div>
                                    </div>


                                    <div className="f-row">
                                        <div className="third">
                                            <label htmlFor="game-img">Image:</label>
                                            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                                        </div>
                                        <div className="third">
                                            <label htmlFor="cooking-time">Cooking time:</label>
                                            <input type="text" id="cookinTime" name="cookingTime" placeholder="Cooking time" />
                                        </div>
                                        <div className="third">
                                            <label htmlFor="category">Category:</label>
                                            <input type="text" id="category" name="category" placeholder="Enter recipe category..." />
                                        </div>
                                    </div>

                                    <div className="f-row">
                                        <div className="third">
                                            <label htmlFor="category">Serves how many people:</label>
                                            <input type="text" id="people" name="people" placeholder="Serves how many people?" />
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Description</h2>
                                    <div className="f-row">
                                        <div className="full">
                                            <textarea id="description" name="description" placeholder="Description" />
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Ingredients</h2>
                                    <div className="f-row">
                                        <div className="full">
                                            <textarea id="ingredients" name="ingredients" placeholder="Ingredients" />
                                        </div>
                                    </div>

                                </section>
                                <section>
                                    <h2>
                                        Instructions{" "}
                                        <span>(enter instructions, each step at a time)</span>
                                    </h2>
                                    <div className="f-row">
                                        <div className="full">
                                            <textarea id="instructions" name="instructions" placeholder="Instructions" />
                                        </div>
                                    </div>
                                </section>

                                <div className="f-row full">
                                    <input
                                        type="submit"
                                        className="button"
                                        id="submitRecipe"
                                        value="Publish this recipe"
                                    />
                                </div>
                            </form>
                        </div>
                    </section>
                    {/*//content*/}
                </div>
                {/*//row*/}
            </div>

        </div>
    );
}