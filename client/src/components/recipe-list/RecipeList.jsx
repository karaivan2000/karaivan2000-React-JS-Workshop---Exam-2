export default function RecipeList() {
    return (
        <div className="wrap clearfix">

            <div className="row">

                <section className="content three-fourth">
                    <div className="cwrap">
                        <header className="s-title">
                            <h2 className="ribbon bright">All recipes</h2>
                        </header>
                        <div className="entries row">
                            <div class="entry one-third">
                                <figure>
                                    <img src="images/img.jpg" alt="" />
                                    <figcaption><a href="recipe.html"><i class="icon icon-themeenergy_eye2"></i> <span>View recipe</span></a></figcaption>
                                </figure>
                                <div className="container">
                                    <h2><a href="recipe.html">Thai fried rice with fruit and vegetables</a></h2>
                                    <div className="actions">
                                        <div>
                                            <div className="difficulty"><i className="ico i-medium"></i><a href="#">medium</a></div>
                                            <div className="likes"><i className="fa fa-heart"></i><a href="#">10</a></div>
                                            <div className="comments"><i className="fa fa-comment"></i><a href="recipe.html#comments">27</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                </section>
            </div>

        </div>
    );
}  