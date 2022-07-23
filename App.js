import React from "react"

import Main from "./components/Main"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Image from "./components/Image"

export default function App() {
    return (
        <div className="container">
            <Image />
            <Main />
            <Contact />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}