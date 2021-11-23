import React , { Component } from "react";
import "./sideBarStyling.css"
import { Link } from "react-router-dom";

class SideBar extends Component {
    render() {
        return(
            <div className = "levels-main-container">
                <div className = "levels-container">
                <Link to = "/characterslist" style = {{textDecoration : "none"}}><p className = "list">Main Characters</p></Link>
                    <Link to = "/redlightgreenlight" style = {{textDecoration : "none"}}><p className = "list">1.Red Light , Green Light</p></Link>
                    <Link to = "/honeycomb" style = {{textDecoration : "none"}}><p className = "list">2.Honeycomb/Dalgano Candy</p></Link>
                    <Link to = "/marbles" style = {{textDecoration : "none"}}><p className = "list">3.Marbles</p></Link>
                    <Link to = "/tugofwar" style = {{textDecoration : "none"}}><p className = "list">4.Tug Of War</p></Link>
                    <Link to = "/glassbridge" style = {{textDecoration : "none"}}><p className = "list">5.Glass Bridge</p></Link>
                    <Link to = "/thesquidgame" style = {{textDecoration : "none"}}><p className = "list">6.The Squid Game</p></Link>
                </div>
            </div>
        )
    }
}

export default SideBar