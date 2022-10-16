import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import Img1 from "../media/cardImg2.png"
import Img2 from "../media/cardImg3.png"


export default function Cards() {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-image-container">
                    <div className="badge">SOLD OUT</div>
                    <img src={Img1} 
                    alt="card image"
                    className="card-image" />
                </div>

                <div className="rating">
                    <FontAwesomeIcon icon={solid("star")}
                    style={{color: "#FE395C"}}
                    className="card-rating-icon"/>
                    <span className="card-rating-number">5.0</span>
                    <span className="card-amount-of-ratings">(6) &bull; </span>
                    <span className="card-country">USA</span>
                </div>

                <div className="card-title">
                    <h4>Life lessons with Katie Zaferes</h4>
                </div>

                <div className="price">
                    <span className="price-from">From $136 </span>
                    <span className="price-per-what">/ person</span>
                </div>
            </div>

            <div className="card">

            <div className="card-image-container">
                    <div className="badge">ONLINE</div>
                    <img src={Img2} 
                    alt="card image"
                    className="card-image" />
                </div>

                <div className="rating">
                    <FontAwesomeIcon icon={solid("star")}
                    style={{color: "#FE395C"}}
                    className="card-rating-icon"/>
                    <span className="card-rating-number">5.0</span>
                    <span className="card-amount-of-ratings">(6) &bull; </span>
                    <span className="card-country">USA</span>
                </div>

                <div className="card-title">
                    <h4>Life lessons with Katie Zaferes</h4>
                </div>

                <div className="price">
                    <span className="price-from">From $136 </span>
                    <span className="price-per-what">/ person</span>
                </div>
            </div>

            <div className="card">
                <img src={Img1} 
                alt="card image"
                className="card-image" />

                <div className="rating">
                    <FontAwesomeIcon icon={solid("star")}
                    style={{color: "#FE395C"}}
                    className="card-rating-icon"/>
                    <span className="card-rating-number">5.0</span>
                    <span className="card-amount-of-ratings">(6) &bull; </span>
                    <span className="card-country">USA</span>
                </div>

                <div className="card-title">
                    <h4>Life lessons with Katie Zaferes</h4>
                </div>

                <div className="price">
                    <span className="price-from">From $136 </span>
                    <span className="price-per-what">/ person</span>
                </div>
            </div>
        </div>
    )
}