import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./cardsData"

export default function App() {
    
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            item={item}
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