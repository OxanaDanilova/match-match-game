import './style.scss';
 class App {
    constructor() {}
    createCards(number) {
        const cards = document.querySelector('.cards');
        for (let i=0; i<number; i++) {
        let element = document.createElement('li');
        element.classList.add('card-wrapper');
        element.innerHTML = `
        <div class="card">
        <div class="front-side">Front</div>
        <div class="back-side">Back</div>
        </div>`;
        cards.appendChild(element);
        }
    }
    };

class Game {
    startTimer(){
      let gameTime = document.querySelector('.game-time');
      let sec = 0;
      let min = 0;
      let timerId = setInterval(function(){
        if (+sec>=59){
          min += 1;
          sec = 0;
        }
        sec += 1;
        if (String(min).length===1){
          min = '0' + min;
        }
        if (String(sec).length===1){
          sec = '0' + sec;
        }
        gameTime.innerHTML = `${min}:${sec}`;
        min = +min;
        sec = +sec;
      }, 1000);
    }
    start() {
        const cards = document.querySelector('.cards');
        const cardHandle = (event) => {
            let target = event.target;
            console.log(target.parentElement);
            if (target.classList.contains('front-side')) {
                target.parentElement.classList.add('flipped');
            }

        }
        cards.addEventListener('click', cardHandle);
        this.startTimer();
    }

}

const app = new App();
app.createCards(5);
const game = new Game();
game.start();

console.log('Hello world');
