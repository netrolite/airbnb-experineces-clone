import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Cards from "./components/Cards"

export default function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <Cards />
            </main>
        </>
    )
}