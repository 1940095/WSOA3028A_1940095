const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function buttonChange(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.buttonColor = rndCol;
    console.log(e);
  }  
  
  btn.addEventListener('click', buttonChange);