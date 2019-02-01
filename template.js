
// Happyou -- a template for presentations based on HTML5, CSS, and JavaScript
// Copyright (C) 2019 Johannes Schönke
// https://github.com/h-a-n-n-e-s
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// For further details, see http://www.gnu.org/licenses/

var frame = document.getElementById('frame');
var slides = document.getElementsByClassName('slide');

var footer = document.createElement('div');
footer.className = 'footer';
frame.appendChild(footer);

var footerObject = document.createElement('object');
footerObject.className = 'footerObject';
var footerImage = document.getElementById('footerImage');
footerObject.type = footerImage.type;
footerObject.data = footerImage.data;
footer.appendChild(footerObject);

var cornerText = document.createElement('p');
cornerText.className = 'cornerText';
cornerText.innerHTML = document.getElementById('leftCornerText').innerHTML;
frame.appendChild(cornerText);

// using the html file name as the identifier for the local storage of the current slide
var htmlFileName = window.location.pathname.split("/").pop();
var cs = 'currentSlide_'.concat(htmlFileName);
var localStorageAvailable;

// show frame except for the title page
function showFrame(index) {
  if ( index > 0 ) frame.style.display = 'block';
              else frame.style.display = 'none';
}

function changeSlide(delta) {
  if ( delta > 0 && currentSlide < slides.length-delta || delta < 0 && currentSlide >= -delta ) { // check bounds
    slides[currentSlide].id = 'visited';
    currentSlide += delta;
    slides[currentSlide].id = 'current';
    showFrame(currentSlide);
    if ( localStorageAvailable ) localStorage.setItem(cs,currentSlide);
  }
}

function toggleFullScreen() {
  var element = document.body;
  if (!document.fullscreenElement && // if not full screen
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement ) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen
                  || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) requestMethod.call(element);
  }
  else {
         if (document.exitFullscreen      ) document.exitFullscreen();
    else if (document.msExitFullscreen    ) document.msExitFullscreen();
    else if (document.mozCancelFullScreen ) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  }
}

function playAutoPlayMovies() {
  var autoPlayMovies = document.getElementsByClassName('autoPlay');
  for ( var i=0; i<autoPlayMovies.length; i++ ) autoPlayMovies[i].play();
}

function localStorageTest(){
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  }
  catch(e) {
    return false;
  }
}

// initial stuff //////////////////////////////////////////////////////////////////////////////////

// number the slides except the mainTitle slide
for ( var i=1; i<slides.length; i++ ) {
  var count = document.createElement('p');
  count.className = 'counter';
  count.innerHTML = i;
  slides[i].appendChild(count);
}

// set or retrieve current slide number
// (For this to work in Safari, set "Disable Local File Restrictions" in the Develop menu.)

localStorageAvailable = localStorageTest();

if ( localStorageAvailable ) {
  
  if ( ! localStorage.getItem(cs) ) localStorage.setItem(cs, 0) // if currentSlide was not set yet

  var currentSlide = Number(localStorage.getItem(cs));

  if ( currentSlide > slides.length - 1 ) currentSlide = slides.length - 1; // if current slide was deleted

  slides[currentSlide].id = 'current';
  showFrame(currentSlide);
}
else {
  showFrame(0);
  console.warn('Local storage is not available in you browser, cannot retrieve current slide number. To enable local storage in Safari, set "Disable Local File Restrictions" in the Develop menu.');
}

// events /////////////////////////////////////////////////////////////////////////////////////////

// play all 'autoPlay' class videos after the first key event (standard 'autoplay' doesn't work anymore in some browsers)
document.addEventListener('keydown', function(event) {
  if ( event.keyCode == '39' || event.keyCode == '34' || event.keyCode == '37' || event.keyCode == '33' ) playAutoPlayMovies();
});

// use esc-key to toggle full screen mode (does only work with Chrome and Opera)
document.addEventListener('keydown', function(event) { if ( event.keyCode == '27' ) toggleFullScreen(); } );

// connect function "changeSlide" to left(37)/right(39) arrow keys (and page-down(33)/page-up(34) keys for remote control)
document.addEventListener('keydown', function(event) {
  if ( event.keyCode == '39' || event.keyCode == '34' ) changeSlide( 1);
  if ( event.keyCode == '37' || event.keyCode == '33' ) changeSlide(-1);
});
