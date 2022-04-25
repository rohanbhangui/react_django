import React, { useEffect } from 'react';
import { Link} from "react-router-dom";
import './instructions.css'
import {isIOS, mobileModel, osVersion} from "react-device-detect"
import axios from 'axios';
const good = require('../../src/static/good.jpeg');
const bad = require('../../src/static/bad.jpeg');

function Instructions() {
    const mobile_device = mobileModel;
    const version = osVersion;
    
    
    const load_img = async () => {
            console.log("mukesh");
            const promise = await axios.get("http://localhost:8000/img/");
            const status = promise.status;
            if (status === 200){
                const data = promise.data; 
                console.log(data);
            }
        };      
    
    const message = {
        i12_13 : 'Settings>Camera>Turn off Smart HDR or Lens Control',
        android: 'Camera Settings>Turn off HDR and/or selfie color tone. If your camera has a beauty mode, turn that off too.',
        notPhone: 'Not a mobile device'
    };
    
    useEffect(() => {
        load_img();
    }, []);
    
    return (
            <section>
                <p> 
                Step 1: Graph a piece of white copy <br></br>paper. You will be folding this in the<br></br>next step.    
                </p>
                <p>
                Step 2: Pull your hair back from your<br></br>face. Remove your glasses if you are<br></br>wearing them.
                </p>
                <p>
                Step 3: Make sure you are in bright, natural<br></br>lighting.
                </p>
                <p>
                Here is an example of a bad photo and a good photo.
                </p>
                <div>
                <img className= "img-example" src ={"http://localhost:8000/static/bad.jpeg"} alt = "nada"></img>
                <img className= "img-example" src ={"http://localhost:8000/static/good.jpeg"} alt = "nada"></img>
                </div>
                
                <p>
                    The following is your mobile device : {mobile_device} OS: {version}.
                </p>
                
                <div className="instruction">
                <p>
                Thus, do the following to turn off beautification settings:
                </p>
                {isIOS && (
                    <p>
                        {message.i12_13}
                    </p>
                )}
                {!isIOS &&(
                    <p>
                        {message.android}    
                    </p>
                )}
                </div>
                
                
                
                <Link className='link' to="/instructions2">CONTINUE</Link>
                
            </section>
            
        
    );

}


export default Instructions;
