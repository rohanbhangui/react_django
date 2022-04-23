// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// Face Mesh - https://github.com/tensorflow/tfjs-models/tree/master/facemesh

import React, { useRef, useEffect, useState } from "react";
import './cam.css'; 
import * as tf from "@tensorflow/tfjs";
// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";

// NEW MODEL
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "../../src/utilities";
import { leftCheek } from "../../src/utilities";

function Cam() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  let valid = false;
  const rect = useRef(null);
  let rectCtx = null;
  const message = {
    perfect : "Go ahead and take your selfie!",
    centering : "Center yourself within the oval",
    brightness : "Find better lighting",
    obstructing : "There seems to be something in the way of your face"
  };
  
  const snap = React.useCallback(
    () => {
      let imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    }, [webcamRef], [setImage]
  );


  //  Load posenet
  const runFacemesh = async () => {
    // OLD MODEL
    // const net = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });
    // NEW MODEL
    
    const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;




      const face = await net.estimateFaces({input:video});
      let parent = document.querySelector('.rectangle');
      let txt = document.getElementById("text");
      


      
      if(leftCheek.leftCheek_x < 430){
        parent.style.border = '5px solid green';
        txt.textContent= message.perfect;
        
      }
      else{
        parent.style.border = '5px solid white';
        txt.textContent = message.centering;
      }

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(()=>{drawMesh(face, ctx)});
    }
  };



  useEffect(()=>{
    
    runFacemesh();
    
    
  }, []);
  
  useEffect(() => {
    const canvasEle = rect.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    rectCtx = canvasEle.getContext("2d");
  });

  return (
    <div className="app">
      <div className="App-header">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            //left: 0,
            //right: 0,
            textAlign: "center",
            zindex: 9,
            //width: 640,
            //height: 480,
          }}
          
        />

        <canvas
          className="c1"
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      <canvas className = 'rectangle' ref = {rect}> </canvas>
      <div className = "message" id="text"></div>
      <button onClick = {snap}> TAKE PHOTO </button>
      </div>
      
      {image && (
        <img className="pic"
          src={image}
        />
      )}
    </div>
  );
}

export default Cam;
