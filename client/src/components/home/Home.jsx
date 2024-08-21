export default function Home() {
    return (
        <main className="main" role="main">

            <div className="intro">
                <figure className="bg">
                    <img src="images/intro.jpg" alt="" />
                </figure>

                <div className="wrap clearfix">

                    <div className="row">
                        <article className="three-fourth text">
                            <h1>Welcome to SocialChef!</h1>
                            <p>
                                SocialChef is the ultimate <strong>cooking social community</strong>
                                , where recipes come to life.
                            </p>
                            <p>
                                You will win awesome prizes, make new friends and share delicious
                                recipes.{" "}
                            </p>
                        </article>
                    </div>

                </div>

            </div>

            <div className="wrap clearfix">

                <div className="row">

                    <section className="content three-fourth">

                        <div className="cwrap">
                            <header className="s-title">
                                <h2 className="ribbon bright">Latest recipes</h2>
                            </header>

                            <div className="entries row">
                                <div className="entry one-third">
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

                        </div>
                    </section>
                </div>

            </div>
            {/*//wrap*/}
        </main>
    );
}