import React from "react";
import ReactDom from "react-dom/client"

import "./style.css";

import one from "./assets/images/one.jpg"
import two from "./assets/images/two.jpg"
import three from "./assets/images/three.jpg"
import four from "./assets/images/four.jpg"
import five from "./assets/images/five.jpg"
import six from "./assets/images/six.jpg"
import seven from "./assets/images/seven.jpg"
import eight from "./assets/images/eight.jpg"


const root = ReactDom.createRoot(document.getElementById("root"))

function ImageGallery() {

  return (
    <div class="gallery-container">
        <div class="box">
            <img src={one}></img>
            <p>Natural falls</p>
        </div>
    
        <div class="box">
        <img src={two}></img>
            <p>Beautiful Creature</p>
        </div>
    
        <div class="box">
        <img src={one}></img>
            <p>Peaceful sight seeing</p>
        </div>
    
        <div class="box">
        <img src={one}></img>
            <p>Natural falls</p>
        </div>
    
        <div class="box">
        <img src={one}></img>
            <p>Peaceful sight seeing</p>
        </div>
    
        <div class="box">
        <img src={one}></img>
            <p>Good ambiance </p>
        </div>
    
        <div class="box">
        <img src={one}></img>
            <p>Beautiful Creature</p>
        </div>
    
        <div class="box">
        <img src={one}></img>
            <p>Natural falls</p>
    
        </div>
    </div>
  );
}


root.render(
  <div>
    <ImageGallery></ImageGallery>
  </div>
)
