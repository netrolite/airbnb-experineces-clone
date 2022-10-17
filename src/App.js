import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./cardsData"

export default function App() {
    const cardsElements = data.map(item => {
        console.log(item);
        return (
            <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            badge={(item.openSpots) ? "Available" : "Sold out"}
            country={item.location}
            title={item.title}
            price={item.price}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <div className="cards">
                    {cardsElements}
                </div>
            </main>
        </>
    )
}