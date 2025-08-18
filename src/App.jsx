import { useState } from "react";
import React from "react";
import "./App.scss";
import { ThemeProvider } from "./contexts/ThemeContext";
import DevCard from "./components/DevCard/DevCard.jsx";
import PageAbout from "./components/PageAbout/PageAbout.jsx";
import Header from "./components/template-parts/Header/Header.jsx";
import Hero from "./components/template-parts/Hero/Hero.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [currentPage, setCurrentPage] = useState("default");
    const page = currentPage == "default" ? <DevCard /> : <PageAbout />;

    const changePage = (page) => setCurrentPage(page)

    return (
        <ThemeProvider>
            <Header page={currentPage} changePage={changePage} />
            <Hero />
            { page }
            <p className="read-the-docs">
               onezmumpi@gmail.com 
            </p>
        </ThemeProvider>
    );
}

export default App;
