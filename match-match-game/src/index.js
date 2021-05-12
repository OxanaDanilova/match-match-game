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
        <div class="back-side">${i}</div>
        </div>`;
        cards.appendChild(element);
        }
        for (let i=0; i<number; i++) {
          let element = document.createElement('li');
          element.classList.add('card-wrapper');
          element.innerHTML = `
          <div class="card">
          <div class="front-side">Front</div>
          <div class="back-side">${i}</div>
          </div>`;
          cards.appendChild(element);
          }
    }
    };

class Game {
  wrigthSteps = 0;
  time = 0;
  calculateScore(){
    console.log('time', this.time);
    let score = this.wrigthSteps *100-(this.time*10);
    score = score<0?0:score;
    document.querySelector('.game-score').innerHTML = score;
  }
    startTimer(){
      let gameTime = document.querySelector('.game-time');
      let sec = 0;
      let min = 0;
      const calculateTime = () =>{
        this.time += 1;
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
        return
      }
      setInterval(calculateTime, 1000);
    }
    checkActiveCards() {
      const activeCards = document.querySelectorAll('.active-card');
      console.log('activeCards', activeCards);
      console.log('activecard.innerhTML', activeCards[0].innerHTML);
        if (activeCards.length===2){
          if (activeCards[0].innerHTML===activeCards[1].innerHTML){
            this.wrigthSteps += 1;
            this.calculateScore();
            activeCards.forEach(element=>{
              element.classList.remove('active-card');
              element.classList.add('right-cards');
            })
          } else {
            activeCards.forEach(element=>{
              element.classList.remove('active-card');
              element.classList.add('wrong-cards');
              setTimeout(function(){
                element.classList.remove('wrong-cards');
                element.parentElement.classList.remove('flipped');
              }, 2000);
            })
          }
      }

    }
    start() {
        const cards = document.querySelector('.cards');
        const cardHandle = (event) => {
            let target = event.target;
            if (target.classList.contains('front-side')) {
                target.parentElement.classList.add('flipped');
                target.nextElementSibling.classList.add('active-card');
                this.checkActiveCards();
            }

        }
        cards.addEventListener('click', cardHandle);
        this.startTimer();
    }

}

const app = new App();
app.createCards(4);
const game = new Game();
game.start();

console.log('Hello world');
