const circle1 = document.getElementsByClassName('circle1')[0];
const circle2 = document.getElementsByClassName('circle2')[0];
const circle3 = document.getElementsByClassName('circle3')[0];
const circle4 = document.getElementsByClassName('circle4')[0];
const circle5 = document.getElementsByClassName('circle5')[0];
const circle6 = document.getElementsByClassName('circle6')[0];
const circle7 = document.getElementsByClassName('circle7')[0];
const circle8 = document.getElementsByClassName('circle8')[0];
const circle0 = document.getElementsByClassName('circle0')[0];

circle0.onclick = function(){
  circle0.classList.toggle('changeScale');
  circle1.classList.toggle('moveTop');
  circle2.classList.toggle('moveTopRight');
  circle3.classList.toggle('moveRight');
  circle4.classList.toggle('moveBottomRight');
  circle5.classList.toggle('moveBottom');
  circle6.classList.toggle('moveBottomLeft');
  circle7.classList.toggle('moveLeft');
  circle8.classList.toggle('moveTopLeft');
}
