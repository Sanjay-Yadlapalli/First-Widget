import React , { Component } from "react";
import "./headerStyling.css"
import { Link } from "react-router-dom"

class Header extends Component {
    render() {
        return(
            <div className = "nav-bar">
                <img style = {{width : 95 , height : 95 , padding: 2}} src = "https://brandlogos.net/wp-content/uploads/2021/11/squid-game-vector.png" alt = "logo"/>
                <Link to = "/" style = {{textDecoration : "none" , }}><h1 className = "header">Home</h1></Link>
                <i class="fa fa-sign-out"></i>
            </div>
        )
    }
}

export default Header