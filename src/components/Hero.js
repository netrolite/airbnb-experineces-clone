import React from "react";
import img1 from "../media/img1.png"
import img2 from "../media/img2.png"
import img3 from "../media/img3.png"
import img4 from "../media/img4.png"
import img5 from "../media/img5.png"
import img6 from "../media/img6.png"
import img7 from "../media/img7.png"
import img8 from "../media/img8.png"
import img9 from "../media/img9.png"

export default function Hero() {
    return (
        <div className="hero">
            <div className="grid">
            <img src={img1} className="grid-item grid-item-1" />
            <img src={img2} className="grid-item grid-item-2" />
            <img src={img3} className="grid-item grid-item-3" />
            <img src={img4} className="grid-item grid-item-4" />
            <img src={img5} className="grid-item grid-item-5" />
            <img src={img6} className="grid-item grid-item-6" />
            <img src={img7} className="grid-item grid-item-7" />
            <img src={img8} className="grid-item grid-item-8" />
            <img src={img9} className="grid-item grid-item-9" />
            </div>
        </div>
    )
}