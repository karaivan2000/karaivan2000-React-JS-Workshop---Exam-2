import { Link } from "react-router-dom";

export default function RecipeListItem({
    _id,
    title,
    imageUrl
}) {
    return (
        <div className="entry one-third">
            <figure>
                <img src={imageUrl} />
                <figcaption>
                    <Link to={`/recipes/${_id}`}>
                        <i className="icon icon-themeenergy_eye2"></i>
                        <span>View recipe</span>
                    </Link>
                </figcaption>
            </figure>

            <div className="container">
                <h2>{title}</h2>
            </div>
        </div>
    );
};