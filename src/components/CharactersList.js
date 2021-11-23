import React, { Component } from "react";
import "./characterlist.css"
import "./levels.css"
import Character from "./Character";

const CharctersList = [
    {
        id : 1 , 
        name : "Abdul Ali",
        imageUrl : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Tripathi-Anupam-as-Abdul-Ali.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "Ali is easily the most likable character on the show. From the very first episode, the kindhearted player shows he’s willing to risk his own life to save Gi-hun by lifting him up in ‘Red Light, Green Light.’ As an immigrant, he knows what it’s like to be mistreated by cruel individuals, and he doesn’t want anyone else to experience hardships like he did."
    } , 
    {
        id : 2 , 
        name : "Seong Gi-Hun",
        imageUrl : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Lee-Jung-jae-----------as-Seong-Gi-hun.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "The protagonist of the show is not meant to be an ideal hero. As an imperfect father and a gambler, Gi-hun is a flawed character who makes mistakes. This is precisely what makes it easier to empathize with him and applaud him for making hard decisions during the games."
    } ,
    {
        id : 3 , 
        name : "Kang Sae-Byeok",
        imageUrl : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Sae-byeok-injured-in-Squid-Game.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "As a North Korean defector, Sae-byeok has learned to rely on nobody else except herself to survive the toughest situations. However, throughout the course of the competition, she learns to trust others like Gi-hun, Sang-woo, and Ali. She eventually becomes more vulnerable, even opening up about her family and aspirations to Ji-yeong in the fourth game."
    } ,
    {
        id : 4 , 
        name : "Ji-Yeong",
        imageUrl : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Ji-yeong-in-Squid-Game.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "Fans probably didn’t expect Ji-yeong to be such a likable player. At first, she seems like a nonchalant person who is quick to berate one of her teammates for his loud prayers. In the next game, she unexpectedly offers to be Sae-byeok’s partner, which turns out to be a disastrous decision."
    } ,
    {
        id : 5 , 
        name : "Hwang Jun-Ho",
        imageUrl : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-game-Jun-ho-gun.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "There’s no questioning the fact that Jun-ho is a smart and skilled character. It takes guts and wit to infiltrate the well-guarded island and learn their system without getting caught. His determination to find his missing brother is admirable, which is why his devastating death hit fans hard."
    } , 
    {
        id : 6 , 
        name : "Han Mi-Nyeo",
        imageUrl : "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Kim-Joo-ryung-----------as-Han-Mi-nyeo.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "Mi-nyeo is a loud and obnoxious character that no one really likes at first. She manipulates players like Deok-su so that she could get into the strongest team. Her tactics only get her so far, however, as players unsurprisingly turn her away and leave her alone in the fourth game – she survives after she’s identified as the “weakest link” in the entire competition."
    } , 
    {
        id : 7 , 
        name : "Cho Sang-Woo",
        imageUrl : "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Cho-Sang-Woo.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "An unpopular opinion about Squid Game is that Sang-woo isn’t so bad. He has quickly become a polarizing character in the fanbase, with some arguing that his awful actions were justified. However, most fans would still agree that Sang-woo’s sacrifice in the last episode doesn’t make up for all of his betrayals."
    } , 
    {
        id : 8 , 
        name : "Hwang In-Ho",
        imageUrl : "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-game-in-ho-final.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "Ali is easily the most likable character on the show. From the very first episode, the kindhearted player shows he’s willing to risk his own life to save Gi-hun by lifting him up in ‘Red Light, Green Light.’ As an immigrant, he knows what it’s like to be mistreated by cruel individuals, and he doesn’t want anyone else to experience hardships like he did."
    } , 
    {
        id : 9 , 
        name : "Jang Deok-Su",
        imageUrl : "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Heo-Sung-tae-as-Jang-Deok-su.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "Ali is easily the most likable character on the show. From the very first episode, the kindhearted player shows he’s willing to risk his own life to save Gi-hun by lifting him up in ‘Red Light, Green Light.’ As an immigrant, he knows what it’s like to be mistreated by cruel individuals, and he doesn’t want anyone else to experience hardships like he did."
    } , 
    {
        id : 10 , 
        name : "Oh Il-Nam",
        imageUrl : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Il-Nam-Smile.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
        description: "Ali is easily the most likable character on the show. From the very first episode, the kindhearted player shows he’s willing to risk his own life to save Gi-hun by lifting him up in ‘Red Light, Green Light.’ As an immigrant, he knows what it’s like to be mistreated by cruel individuals, and he doesn’t want anyone else to experience hardships like he did."
    }
]
class CharactersList extends Component{
    
    render() {
        return(
            <div className = "centering">
                <ul className = "character-container">
                    {CharctersList.map((each) => (
                        <Character key = {each.id} list = {each} />
                    ))}    
                </ul>
            </div>
        )
    }
}

export default CharactersList