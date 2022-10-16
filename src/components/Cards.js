import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import Img1 from "../media/cardImg1.png"
import Img2 from "../media/cardImg2.png"
import Img3 from "../media/cardImg3.png"


export default function Cards() {
    return (
        <div className="cards">
            <div className="card">
                <img src={Img1} 
                alt="card image"
                className="card-image" />

                <div className="rating">
                    <FontAwesomeIcon icon={solid("star")}
                    style={{color: "#FE395C"}}/>
                    <span className="rating-number">5.0</span>
                    (<span className="amount-of-ratings">6</span>)
                    
                </div>
            </div>
        </div>
    )
}