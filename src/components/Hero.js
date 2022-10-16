import React from "react";
import Img from "../media/hero-images.png"
import Img2 from "../media/image2.png"

export default function Hero() {
    return (
        <div className="hero">
                <img src={Img}
                alt="image grid showcasing different experiences"
                className="hero-image" />

            <h1 className="hero-title">Online experiences</h1>
            <p className="hero-text">
                Join unique interactive activities led by <br />one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}