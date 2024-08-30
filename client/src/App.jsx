import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import RecipeList from "./components/recipe-list/RecipeList";
import RecipeSubmit from "./components/recipe-submit/RecipeSubmit";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import Logout from "./components/logout/Logout";


function App() {

    return (
        <AuthProvider>
            <Header />

            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/submit" element={<RecipeSubmit />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            </Routes>

            <Footer />
        </AuthProvider>
    )
}

export default App
