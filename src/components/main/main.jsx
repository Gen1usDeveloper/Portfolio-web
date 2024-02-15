import React from "react";
//import {NavLink} from "react-router-dom";
import image1 from "../../images/pexels-aleksandar-pasaric-2341830.jpg";
import image2 from "../../images/pexels-andy-vu-3244513.jpg";
import image3 from "../../images/pexels-joyston-judah-933054.jpg";
import image4 from "../../images/pexels-maxime-francis-2246476.jpg";
import image5 from "../../images/pexels-mirco-violent-blur-4072840 (1).jpg";
import image6 from "../../images/pexels-roberto-nickson-2559941.jpg";
import image7 from "../../images/pexels-suzukii-xingfu-872831.jpg";
import "./main.css";

const main = () => {
    return (
        <div className="intro">
            <div className="background-slider global-max-width">
            <div className="slider-image1">
                    <img src={image1} alt="" />
                    {/* Message */}
                    <div className="Message">
                        <h2>Hire Me To Develop Your Website</h2>
                        <p>Hi! My Self Muhammad Jawad Khan.
                             I am a Front-end Web Developer.</p>
                             <button className="btn"><a href="#">Hire Me</a></button>
                             <div class="shine"></div>
                    </div>
                    </div>
                    {/* <div className="slider-image2">
                    <img src={image2} alt="" />
                    </div>
                    <div className="slider-image3">
                    <img src={image3} alt="" />
                    </div>
                    <div className="slider-image4">
                    <img src={image4} alt="" />
                    </div>
                    <div className="slider-image5">
                    <img src={image5} alt="" />
                    </div>
                    <div className="slider-image6">
                    <img src={image6} alt="" />
                    </div>
                    <div className="slider-image7">
                    <img src={image7} alt="" />
                    </div> */}
                </div>
            </div>

    );
};

export default main;