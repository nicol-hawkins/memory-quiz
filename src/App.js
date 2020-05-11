import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageOne from './images/ImageOne.jpg';
import ImageTwo from './images/ImageTwo.jpg';
import ImageThree from './images/ImageThree.jpg';
import ImageFour from './images/ImageFour.jpg';
import ImageFive from './images/ImageFive.jpg';

let i = 0;
let images = [];
let time = 3000;

//Image List
images[0] = {ImageOne}
images[1] = {ImageTwo}
images[2] = {ImageThree}
images[3] = {ImageFour}
images[4] = {ImageFive}

//Change Image
function changeImg() {
  document.slide.src = images[1];

  if(i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time)
}

window.onload = changeImg;

function App() {
  return (
    <div className="App">
      <img name="slide" style={{width:"400", height: "auto"}} />
    </div>
  );
}

export default App;
