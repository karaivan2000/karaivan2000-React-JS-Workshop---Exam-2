import { useParams } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";

import * as recipeService from "../../services/recipeService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../context/authContext";

const reducer = (state, action) => {
    switch (action?.type) {
        case `GET_ALL_COMMENTS`:
            return [...action.payload];
        case `ADD_COMMENT`:
            return [...state, action.payload];
        default:
            return state;
    }

}

export default function RecipeDetails() {
    const { email } = useContext(AuthContext);
    const [recipe, setRecipe] = useState({});
    const [comments, dispatchComments] = useReducer(reducer, []);
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(setRecipe)

        commentService.getAll(recipeId)
            .then((result) => {
                dispatchComments({
                    type: `GET_ALL_COMMENTS`,
                    payload: result,
                })
            })
    }, [recipeId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            recipeId,
            formData.get(`comment`),
        );

        newComment.owner = { email };

        //setComments(state => [...state, { ...newComment, owner: email }]);
        dispatchComments({
            type: `ADD_COMMENT`,
            payload: newComment
        })
    };

    return (
        <section className="content three-fourth">
            {/*recipe*/}
            <div className="recipe">
                <div className="row">
                    {/*two-third*/}
                    <article className="two-third">
                        <div className="image">
                            <img src={recipe.imageUrl} />
                        </div>
                        <div className="intro">
                            <p>
                                <strong>
                                    {recipe.title}
                                </strong>
                            </p>{" "}
                            <p>
                                {recipe.description}
                            </p>
                        </div>
                        <h3>Instructions:</h3>
                        <div className="instructions">
                            {recipe.instructions}
                        </div>
                    </article>
                    {/*//two-third*/}
                    {/*one-third*/}
                    <article className="one-third">
                        <dl className="basic">
                            <dt>Cooking time</dt>
                            <dd>{recipe.cookingTime} mins</dd>
                            <dt>Serves</dt>
                            <dd>{recipe.people} people</dd>
                        </dl>
                        <dl className="user">
                            <dt>Category</dt>
                            <dd>{recipe.category}</dd>
                        </dl>
                        <h3>Ingredients:</h3>
                        <dl className="ingredients">

                            <dd>{recipe.ingredients}</dd>

                        </dl>
                    </article>

                    <div className="f-row full">
                        <a href="#" className="edit"><button>Edit</button></a>
                        <button className="remove" >Remove</button>
                    </div>


                    {/*//one-third*/}
                </div>
            </div>
            {/*//recipe*/}
            {/*comments*/}
            <div className="comments" id="comments">
                <h2>Comments:</h2>
                <ol className="comment-list">

                    {comments.map(({ _id, text, owner: { email } }) => (
                        <li key={_id} className="comment depth-1">
                            <div className="comment-box">
                                <div className="comment-text">
                                    <p>
                                        {email}: {text}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}

                    {comments.length === 0 && (
                        <h3 id="no-recipes">No comments yet</h3>
                    )}

                </ol>
            </div>
            {/*//comments*/}


            <>
                {/*respond*/}
                <div className="comment-respond" id="respond">
                    <h2>Leave a reply</h2>
                    <div className="container">
                        <form onSubmit={addCommentHandler}>

                            <div className="f-row">
                                <textarea name="comment" placeholder="Comment here...."></textarea>
                            </div>
                            <div className="f-row">
                                <div className="third bwrap">
                                    <input type="submit" value="Add comment" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                {/*//respond*/}
            </>


        </section>
    );
};