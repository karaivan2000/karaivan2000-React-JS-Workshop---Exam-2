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
                                <div class="container">
                                    <h2><a href="recipe.html">Thai fried rice with fruit and vegetables</a></h2>
                                    <div class="actions">
                                        <div>
                                            <div class="difficulty"><i class="ico i-medium"></i><a href="#">medium</a></div>
                                            <div class="likes"><i class="fa fa-heart"></i><a href="#">10</a></div>
                                            <div class="comments"><i class="fa fa-comment"></i><a href="recipe.html#comments">27</a></div>
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