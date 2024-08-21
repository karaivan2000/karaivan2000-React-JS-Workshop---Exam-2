import { Link } from "react-router-dom";

export default function Login() {
    return(
        <section className="content center full-width">
        <form id="login">
            <div className="modal container">
                <h1>Login</h1>

                <div className="f-row">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Van2000@abv.bg"
                    />
                </div>
                <div className="f-row">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password" />
                </div>
                <div className="f-row bwrap">
                    <input type="submit" value="login" />
                </div>
                <p>
                    Dont have an account yet? <Link to="/register">Sign up.</Link>
                </p>
            </div>
        </form>
    </section>
    );
}