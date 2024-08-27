import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

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

    return (
        <AuthContext.Provider value={{loginSubmitHandler}}>
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
