import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./context/authContext";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import RecipeList from "./components/recipe-list/RecipeList";
import RecipeSubmit from "./components/recipe-submit/RecipeSubmit";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RecipeDetails from "./components/recipe-details/RecipeDetails";


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async ({ email, password }) => {
        try {
            const result = await authService.login(email, password);

            setAuth(result);

            navigate(`/`);
        } catch (err) {
            console.log(err.message);
        }
        
    };
    const registerSubmitHandler = async ({email, password}) => {
        try {
            const result = await authService.register(email, password);

            setAuth(result);

            navigate(`/`);
        } catch (err) {
            console.log(err.message);
        }
        
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            <Header />

            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/submit" element={<RecipeSubmit />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
