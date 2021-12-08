import React , { Component } from "react";
import "./menubar.css"

class Menubar extends Component {
    render() {
        return(
            <div className = "menu-container">
                <div className = "group11852"> 
                    <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638528748/Group_11852_rzsczk.png" className = "grp-img" alt = "grp"/>
                </div>
                <div className = "center-images">
                    <div className = "img">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638601862/Vector_lbuqlf.png" alt = "vector1"/>
                    </div>
                    <div className = "selectedMenu">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638626280/Vector_v6f7rc.png" className = "selectedMenu-img" alt = "vec"/>
                    </div>
                    <div className = "img">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638602652/Vector_shacaa.png" alt = "vector3"/>
                    </div>
                    <div className = "img">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638602737/Vector_b80b0z.png" alt = "vector4"/>
                    </div>
                    <div className = "img">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638603156/Brand_Logos_nyn7od.png" alt = "vector5"/>
                    </div>
                    <div className = "img">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638603275/Vector_qhcaw2.png" alt = "vector6"/>
                    </div>
                </div>
                <div className = "btm-images">
                    <div className = "bright-dark">
                        <p className = "para">Bright/Dark</p>
                    </div>
                    <div className = "toggle">
                        <div className = "sun-div">
                            <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638618000/Vector_yfcxap.png" className = "sun-img" alt = "sun"/>
                        </div>
                        <div className = "moon-div">
                            <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638625578/Vector_1_uhoxvb.png" className = "moon-img" alt = "moon"/>
                        </div>
                    </div>
                    <div className = "img-contain"></div>
                    <div className = "logout-cont">
                        <img src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638633453/Vector_3_kuumza.png" alt = "logout"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menubar