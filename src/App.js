import React from "react";
import Menubar from "./components/Menubar";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Barchart from "./components/Barchart";
const App = () => {
    return(
        <div className = "main-container">
            <Menubar />
            <div className = "right-side-stuff">
                <Navbar />
                <Barchart />
                <Footer />
            </div>
        </div>
    )
}

export default App;