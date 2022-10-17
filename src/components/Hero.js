import React from "react";
import HeroImg from "../media-static/hero-images.png"

export default function Hero() {
    return (
        <div className="hero">
                <img src={HeroImg}
                alt="grid showing different experiences"
                className="hero-image" />

            <h1 className="hero-title">Online experiences</h1>
            <p className="hero-text">
                Join unique interactive activities led by <br />one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}