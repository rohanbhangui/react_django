import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './instructions.css'
import {deviceDetect, isIOS, isIPhone13, mobileModel, osVersion} from "react-device-detect"


function Instructions2() {
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

        
            <section>
            <div> 
            Next you'll ned to prepare a piece of<br></br> whie copy paper. Follow the instructions below<br></br>to prepare your paper.    
            </div>
            
            <Link className = "link" to="/selfie">CONTINUE</Link>
            </section>
        
            
        
    );

}


export default Instructions2;