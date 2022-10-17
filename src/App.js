import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Card from "./components/Card"

export default function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <div className="cards">
                    <Card 
                    img="cardImg3.png"
                    rating="5.0"
                    reviewCount="6"
                    badge="online"
                    country="USA"
                    title="Life lessons with Katie Zafferes"
                    currency="$"
                    price="200"
                    unit="hour"
                    />
                    <Card 
                    img="cardImg2.png"
                    rating="5.0"
                    reviewCount="6"
                    badge="sold out"
                    country="Georgia"
                    title="Swimming classes"
                    currency="$"
                    price="139"
                    unit="person"
                    />
                    <Card 
                    img="cardImg3.png"
                    rating="5.0"
                    reviewCount="6"
                    badge="online"
                    country="Zimbabwe"
                    title="Online safari"
                    currency="$"
                    price="139"
                    unit="person"
                    />
                </div>
            </main>
        </>
    )
}