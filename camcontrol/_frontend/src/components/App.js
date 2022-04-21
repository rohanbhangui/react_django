import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Cam from './cam';
import "./cam.css";
import {Route, HashRouter as Router, Routes} from 'react-router-dom';


const cam = document.getElementById('root');
const root = createRoot(cam);
root.render(
    <Router basename='/static'>
        <Routes>
                <Route path = "/selfie" element = {<Cam/>}/>
        </Routes>
    </Router>
);

