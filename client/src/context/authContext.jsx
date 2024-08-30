import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({
    children, 
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem(`accessToken`);

        return {};
    });

    const loginSubmitHandler = async ({ email, password }) => {
        try {
            const result = await authService.login(email, password);

            setAuth(result);

            localStorage.setItem(`accessToken`, result.accessToken);

            navigate(`/`);
        } catch (err) {
            console.log(err.message);
        }

    };

    const registerSubmitHandler = async ({ email, password }) => {
        try {
            const result = await authService.register(email, password);

            setAuth(result);
            localStorage.setItem(`accessToken`, result.accessToken);

            navigate(`/`);
        } catch (err) {
            console.log(err.message);
        }

    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem(`accessToken`);
    };

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = `AuthContext`;

export default AuthContext;