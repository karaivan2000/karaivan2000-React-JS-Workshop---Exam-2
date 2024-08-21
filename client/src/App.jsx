import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import RecipeList from "./components/recipe-list/RecipeList";

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/recipes" element={<RecipeList />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
