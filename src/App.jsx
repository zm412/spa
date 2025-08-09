import { useState } from "react";
import React from "react";
import "./App.scss";
import { ThemeProvider } from "./contexts/ThemeContext";
import DevCard from "./components/DevCard/DevCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <ThemeProvider>
            <DevCard />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </ThemeProvider>
    );
}

export default App;
