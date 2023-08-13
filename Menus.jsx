import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import { About } from "./About";
import Navbar from "./Navbar";
import React from 'react'

function Menus() {
  return (
    <>
  
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Features" element={<Features/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Menus;