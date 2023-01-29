import React, { useCallback, useEffect, useRef, useState } from 'react';
import Canvas from './canvas.js';
import './cv.css'


function Canvasviewer(){
    const front  = "https://i.ibb.co/CzgK8VY/Screenshot-from-2023-01-07-12-33-41.png";
    const bottom = "https://i.ibb.co/x2BP36x/Screenshot-from-2023-01-07-12-33-06.png";
    const top = "https://i.ibb.co/6ZpGm91/Screenshot-from-2023-01-07-12-33-19.png";
    const right_view = "https://i.ibb.co/jWHcz5D/Screenshot-from-2022-12-30-12-05-53.png";
    const left_view = "https://i.ibb.co/nnS6pvp/Screenshot-from-2022-12-30-12-05-35.png";
    const back_right = "https://i.ibb.co/W0qJf5d/Screenshot-from-2022-12-30-12-04-36.png";
    const back_left = "https://i.ibb.co/CzRgt5f/Screenshot-from-2022-12-30-12-04-20.png";
    const back = "https://i.ibb.co/jrHd1wk/Screenshot-from-2023-01-07-12-32-46.png";
    const front_left = "https://i.ibb.co/y8VZ7nm/Screenshot-from-2023-01-07-12-32-12.png";
    const front_right = "https://i.ibb.co/Njcz5gY/Screenshot-from-2023-01-07-12-32-28.png";
  
    const [imgView, setImgView] = useState(front);
    
    const btnstyle = {
      "background-color": "e7e7e7", /* Green */
      "border": "none",
      // "color": "white",
      "padding": "15px 20px",
      "text-align": "center",
      "text-decoration": "none",
      "display": "inline-block",
      "font-size": "16px",
      "margin" : "5px",
      "border-radius" : "5px"
      
    }
  
    const fronthandler = () =>{
      setImgView(front);
      console.log(imgView);
    }
    const frontlefthandler = () =>{
      setImgView(front_left);
      console.log(imgView);
    }
   
    const frontrighthandler = () =>{
      setImgView(front_right);
      console.log(imgView);
    }
   
    const backrighthandler = () =>{
      setImgView(back_right);
    }
   
    const backlefthandler = () =>{
      setImgView(back_left);
    }
   
    const backhandler = () =>{
      setImgView(back);
    }
   
    const tophandler = () =>{
      setImgView(top);
    }
   
    const bottomhandler = () =>{
      setImgView(bottom);
    }
   
  // https://i.ibb.co/SQ1HcCW/Screenshot-from-2022-12-30-12-02-42.png  front
  // https://i.ibb.co/G94W5Hn/Screenshot-from-2022-12-30-12-06-43.png  bottom
  // https://i.ibb.co/2NCNryC/Screenshot-from-2022-12-30-12-06-16.png  top
  // https://i.ibb.co/jWHcz5D/Screenshot-from-2022-12-30-12-05-53.png right view
  // https://i.ibb.co/nnS6pvp/Screenshot-from-2022-12-30-12-05-35.png left view
  // https://i.ibb.co/W0qJf5d/Screenshot-from-2022-12-30-12-04-36.png back right
  // https://i.ibb.co/CzRgt5f/Screenshot-from-2022-12-30-12-04-20.png back left
  // https://i.ibb.co/CKBDM7C/Screenshot-from-2022-12-30-12-03-48.png back 
  // https://i.ibb.co/nPFfz4y/Screenshot-from-2022-12-30-12-03-26.png front left
  // https://i.ibb.co/smL23D3/Screenshot-from-2022-12-30-12-03-04.png front right

// https://i.ibb.co/CzgK8VY/Screenshot-from-2023-01-07-12-33-41.png 
// https://i.ibb.co/6ZpGm91/Screenshot-from-2023-01-07-12-33-19.png
// https://i.ibb.co/x2BP36x/Screenshot-from-2023-01-07-12-33-06.png
// https://i.ibb.co/jrHd1wk/Screenshot-from-2023-01-07-12-32-46.png
// https://i.ibb.co/Njcz5gY/Screenshot-from-2023-01-07-12-32-28.png
// https://i.ibb.co/y8VZ7nm/Screenshot-from-2023-01-07-12-32-12.png
   
    return (
      <div className="maincontent" >
        <div className='switchTab' >
          <button onClick={fronthandler} style = {btnstyle}>front view </button>
          <button onClick={frontlefthandler}  style = {btnstyle}>front-left view </button>
          <button onClick={frontrighthandler}  style = {btnstyle}>front-right view </button>
          <button onClick={backhandler}  style = {btnstyle}>back view </button>
          <button onClick={bottomhandler}  style = {btnstyle}>bottom view </button>
          <button onClick={tophandler}  style = {btnstyle}>top view </button>
          {/* <button>front view </button> */}
        </div>
        <div className='canvas'>
          
          <Canvas imagesrc = {imgView}/>
          {/* <Canvas imagesrc = "https://i.ibb.co/nPFfz4y/Screenshot-from-2022-12-30-12-03-26.png"/>
          <Canvas imagesrc = "https://i.ibb.co/smL23D3/Screenshot-from-2022-12-30-12-03-04.png"/>
          <Canvas imagesrc = "https://i.ibb.co/CKBDM7C/Screenshot-from-2022-12-30-12-03-48.png"/>
          <Canvas imagesrc = "https://i.ibb.co/G94W5Hn/Screenshot-from-2022-12-30-12-06-43.png"/>
          <Canvas imagesrc = "https://i.ibb.co/2NCNryC/Screenshot-from-2022-12-30-12-06-16.png"/> */}
        </div>
      </div>
    );
  }
  
  export default Canvasviewer;
  