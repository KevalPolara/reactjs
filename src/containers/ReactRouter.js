// What is React Router Dom :-

// React Router dom is that a Single page application without taking any time in a fraction of time 
// one page to another page,Without reload

import React from 'react';
import Home from  './Home'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Contact from './Contact';
import About from './About';

function ReactRouter(props) {
    return (
        <BrowserRouter>
        <Routes>
        {/* Routes As a parent Work Kare */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        
    );
}

export default ReactRouter;