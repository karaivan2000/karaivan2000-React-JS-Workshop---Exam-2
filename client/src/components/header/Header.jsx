import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

export default function Header() {
    const { isAuthenticated} = useContext(AuthContext);

    return (
        <header className="head" role="banner">
            {/*wrap*/}
            <div className="wrap clearfix">
                <Link to="/" title="SocialChef" className="logo">
                    <img src="/images/ico/logo.png" alt="SocialChef logo" />
                </Link>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li className="current-menu-item">
                            <Link to="/recipes" title="Home">
                                <span>All recipes</span>
                            </Link>
                        </li>

                        {isAuthenticated && (
                            <>
                                <li>
                                    <Link to="/recipes/submit" title="Submit a recipe">
                                        <span>Submit a Recipe</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/logout">
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </>
                        )}
                        {!isAuthenticated && (
                            <>
                                <li>
                                    <Link to="/login" title="Login page">
                                        <span>Login</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/register" title="Register page">
                                        <span>Register</span>
                                    </Link>
                                </li>
                            </>
                        )}


                    </ul>
                </nav>

            </div>
            {/*//wrap*/}
        </header>
    );
}