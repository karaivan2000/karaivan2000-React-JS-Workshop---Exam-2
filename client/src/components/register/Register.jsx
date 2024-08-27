import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RePassword: 'rePassword',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RePassword]: '',
    });

    return (
        <section className="content center full-width">
            <form id="register"onSubmit={onSubmit}>
                <div className="modal container">
                    <h3>Register</h3>

                    <div className="f-row">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Email]}
                            placeholder="Van2000@abv.bg"

                        />
                    </div>
                    <div className="f-row">
                        <label htmlFor="email">Password:</label>
                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Password]}
                            placeholder="Your password"
                        />
                    </div>
                    <div className="f-row">
                        <label htmlFor="email">Repeat password:</label>
                        <input
                            type="password"
                            id="repeat-password"
                            name="rePassword"
                            onChange={onChange}
                            values={values[RegisterFormKeys.RePassword]}
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