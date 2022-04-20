import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Cam from './cam';
import "./cam.css";
import {Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom';


const cam = document.getElementById('root');
const root = createRoot(cam);
root.render(
    <Router>
        <Routes>
                <Route path = "/selfie" element = {<Cam/>}/>
            
        </Routes>
    </Router>
);

