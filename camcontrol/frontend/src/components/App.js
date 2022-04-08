import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Cam from './cam';

class App extends Component{
    render() {
        return <h1>React App</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <App />
        <Cam />
    </React.StrictMode>
);
