let btnColor = document.querySelector('#color');
let btnColor2 = document.querySelector('#color2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  } 
  
  btnColor.addEventListener('click', ()=> console.log("Color!"), btnColor.style.backgroundColor='rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')');
  btnColor2.addEventListener('click', ()=> btnColor2.style.backgroundColor='rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')');
 //btn3.addEventListener('click', ()=> console.log("Alert!"), alert("do something"));
 //btn4.addEventListener('click', ()=> console.log("About!"), location.href = "/WSOA3028A_1940095/about");