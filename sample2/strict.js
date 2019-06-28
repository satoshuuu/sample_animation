const mainCircle = document.getElementsByClassName('mainCircle')[0];
const circle1 = document.getElementsByClassName('circle1')[0];
const circle2 = document.getElementsByClassName('circle2')[0];
const circle3 = document.getElementsByClassName('circle3')[0];

mainCircle.onclick = function(){
  circle1.classList.toggle('moveup1');
  circle2.classList.toggle('moveup2');
  circle3.classList.toggle('moveup3');
}
