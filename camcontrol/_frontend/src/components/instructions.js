import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import { Link, BrowserRouter as Router } from "react-router-dom";

import {deviceDetect, isIOS, isIPhone13, mobileModel, osVersion} from "react-device-detect"


function Instructions() {
    const mobile_device = mobileModel;
    const version = osVersion;
    
    
    const message = {
        
        i12 : 'Settings>Camera>Turn off Smart HDR',
        i13 : 'Settings>Camera>Turn off Lens Control',
        notphone: 'Not a mobile device'
    };

    //const txt = document.getElementById('text1');
    /*
    if (isIOS && (isIPhone13)){
        txt.textContent = message.i13;
        
    }
    else if (!isIPhone13){
        txt.textContent = message.i12;
    }
    else{
        
        txt.textContent = message.notphone;
    }
    */
    return (

        <Router>
            <header>
            <div> 
            Step 1: Graph a piece of white copy <br></br>paper. You will be folding this in the<br></br>next step.    
            </div>
            <div>
            Step 2: Pull your hair back from your<br></br>face. Remove your glasses if you are<br></br>wearing them.
            </div>
            <div>
            Step 3: Make sure you are in bright, natural<br></br>lighting.
            </div>
            <br></br>
            <div>
            Here is an example of a bad photo and a good photo.
            </div>

            <div>
                The following is your mobile device : {mobile_device} {version}.
            </div>
            <div>
            Thus, do the following to turn off beautification settings:
            </div>
            <div id = 'text1'>
            </div>
            
            <Link to="/selfie">CONTINUE</Link>
            </header>
        </Router>
            
        
    );

}

const instruct = document.getElementById('root2');
const root = createRoot(instruct);
root.render(
    <Instructions />
);


export default Instructions;