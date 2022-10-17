import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./cardsData"

export default function App() {
    
    const cards = data.map(item => {
        console.log(item);
        return (
            <Card 
            title={item.title}
            country={item.location}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            img={item.coverImg}
            badge={item.openSpots ? "available" : "sold out"}
            price={item.price}
            key={item.id}
            />
        ) 
    })
    
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <div className="cards">
                    {cards}
                </div>
            </main>
        </>
    )
}