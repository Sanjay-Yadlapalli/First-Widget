import React, { Component } from "react";
import "./eachcharacter.css";

class Character extends Component {
    render() {
        const { list } = this.props
        const { id , name ,imageUrl , description } = list
    return(
        <li>
            <div className = "each-character">
                <h1>No. {id} {name}</h1>
                <img src = {imageUrl} alt = "Ali"/>
                <p>{description}</p>

            </div>
        </li>
    )
    }
}

export default Character