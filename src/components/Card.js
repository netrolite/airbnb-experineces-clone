import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image-container">
                <div className="badge">{props.badge.toUpperCase()}</div>
                <img src={process.env.PUBLIC_URL + "/media/" + props.img}
                alt="card"
                className="card-image" />
            </div>

            <div className="rating">
                <FontAwesomeIcon icon={solid("star")}
                style={{color: "#FE395C"}}
                className="card-rating-icon"/>
                <span className="card-rating">{props.rating}</span>
                <span className="card-review-count">({props.reviewCount}) &bull; </span>
                <span className="card-country">{props.country}</span>
            </div>

            <div className="card-title">
                <h4>{props.title}</h4>
            </div>

            <div className="price">
                <span className="price-from">From {props.currency}{props.price} </span>
                <span className="price-per-what">/ {props.unit}</span>
            </div>
        </div>
    )
};