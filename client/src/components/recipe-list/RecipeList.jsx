export default function RecipeList() {
    return (
        <div className="wrap clearfix">

            <div className="row">

                <section className="content three-fourth">
                    <div className="cwrap">
                        <header className="s-title">
                            <h2 className="ribbon bright">All recipes</h2>
                        </header>
                        <div className="entry one-third">
                            <figure>
                                <img src="/images/img.jpg" alt="" />
                                <figcaption>
                                    <a href="recipe.html"><i class="icon icon-themeenergy_eye2"></i>
                                        <span>View recipe</span></a>
                                </figcaption>
                            </figure>

                            <div className="container">
                                <h2><a href="recipe.html">Thai fried rice with fruit and vegetables</a></h2>
                            </div>
                        </div>
                    </div >
                </section>
            </div>

        </div>
    );
}


