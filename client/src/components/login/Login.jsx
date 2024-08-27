import { useContext } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";

export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: ``,
        password: ``,
    });
    return(
        <section className="content center full-width">
        <form id="login" onSubmit={onSubmit}>
            <div className="modal container">
                <h1>Login</h1>

                <div className="f-row">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="Van2000@abv.bg"
                    />
                </div>
                <div className="f-row">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
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