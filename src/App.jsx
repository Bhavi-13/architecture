import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/HomePage/Home";
import About from "./Components/AboutPage/About";
import Services from "./Components/Services Page/Services";
import Gallery from "./Components/Gallery Page/Gallery";
import Career from "./Components/CareerPage/Career";
import Contact from "./Components/ContactPage/Contact";


function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
