import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Cam from './cam';

const cam = document.getElementById('root');
const root = createRoot(cam);
root.render(
    <Cam />
);
