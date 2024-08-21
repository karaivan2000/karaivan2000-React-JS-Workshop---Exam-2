import { Link } from "react-router-dom";

export default function Register() {
    return(
        <section className="content center full-width">
        <form id="register">
            <div className="modal container">
                <h3>Register</h3>

                <div className="f-row">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Van2000@abv.bg"

                    />
                </div>
                <div className="f-row">
                    <label htmlFor="email">Password:</label>
                    <input
                        type="password"
                        id="register-password"
                        name="password"
                        placeholder="Your password"
                    />
                </div>
                <div className="f-row">
                    <label htmlFor="email">Repeat password:</label>
                    <input
                        type="password"
                        id="repeat-password"
                        name="rePassword"
                        placeholder="Repeat password"
                    />
                </div>
               {/*preloader {error && (
                    <p style={{color: `red`}}>{error}</p>
                )}
                */}
                <div className="f-row bwrap">
                    <input type="submit" value="register" />
                </div>
                <p>
                    Already have an account yet? <Link to="/login">Log in.</Link>
                </p>
            </div>
        </form>
    </section>
    );
}