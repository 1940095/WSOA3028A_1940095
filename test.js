let btnColor = document.querySelector('#color');
let btnColor2 = document.querySelector('#color2');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  } 
  
  btnColor.addEventListener('click', ()=> btnColor.style.backgroundColor='rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')');
  btnColor2.addEventListener('click', ()=> btnColor2.style.backgroundColor='rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')');