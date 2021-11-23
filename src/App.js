import React , { Component } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import RedLightGreenLight from './components/RedLightGreenLight'
import HoneyComb from './components/HoneyComb'
import Marbles from './components/Marbles'
import TugOfWar from './components/TugOfWar'
import GlassBridge from './components/GlassBridge'
import TheSquidGame from "./components/TheSquidGame";
import CharactersList from "./components/CharactersList";


class App extends Component {
    render() {
        return(
            <>
            
            <Router>
            <Header />
            <div className = "container">
                <SideBar />
                <div>
                    <Routes>
                        <Route path = "/" element = {<Home />} />
                        <Route exact path = "/redlightgreenlight" element = {<RedLightGreenLight />} />
                        <Route exact path = "/honeycomb" element = {<HoneyComb />} />
                        <Route exact path = "/marbles" element = {<Marbles />} />
                        <Route exact path = "/tugofwar" element = {<TugOfWar />} />
                        <Route exact path = "/glassbridge" element = {<GlassBridge />} />
                        <Route exact path = "/thesquidgame" element = {<TheSquidGame />} />
                        <Route exact path = "/characterslist" element = {<CharactersList />} />
                    </Routes>
                </div>
            </div>
            </Router>
            
            </>
        )
    }
}

export default App