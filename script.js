const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const timer = document.querySelector(".timer");
//const gameover =document.querySelector(".gameover")
//gameover.style.animation='NONE'

const loop = setInterval(() => {
    console.log('loop')
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${pipePosition}px`;

    mario.src='./fotos/cry.gif'
    mario.style.widht = '75px'
    mario.style.marginLeft = '50px'


    
    clearInterval(loop);
    clearInterval(this.pause);
    alert(`LOSERRRRR!, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
}


}, 10);

function jump() {
    mario.classList.add('jump')
    setTimeout(() => {
      mario.classList.remove('jump')
    },500)
  }

  const startTime = () =>{
    this.pause = setInterval(() => {
const currentTime = +timer.innerHTML;
timer.innerHTML = currentTime + 1;
    },1000);
  }

  window.onload = () => {
    startTime();
  }


document.addEventListener('keydown', jump);
