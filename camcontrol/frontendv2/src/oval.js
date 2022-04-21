import React, {useEffect, useRef} from "react";
import {leftCheek} from './utilities';


function Rectangle(){
    const rect = useRef(null);
    let rectCtx = null;
    let valid = false;

    

    useEffect(() => {
        const canvasEle = rect.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
        rectCtx = canvasEle.getContext("2d");
    })

    return (
        <canvas className ={'rectangle ' + (valid ? 'good' : 'Error')} ref = {rect}> </canvas>
    );
   
    
}

export default Rectangle;