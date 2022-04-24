import React from 'react';
import { Link } from 'react-router-dom';
import './instructions.css'

const fold = require('../static/fold.png')

function Instructions2() {

    return (

        
            <section>
            <p> 
            Next you'll ned to prepare a piece of<br></br> whie copy paper. Follow the instructions below<br></br>to prepare your paper.    
            </p>
            <img className='img3' src={String(fold)} alt = "nada"></img>
            <Link className = "link" to="/selfie">CONTINUE</Link>
            </section>
        
            
        
    );

}


export default Instructions2;