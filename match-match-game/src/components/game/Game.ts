import CongratsPopup from '../congratsPopup/CongratsPopup';
import Router from '../router/Router';
import Settings from '../settingsGame/Settings';
import './Game.scss';
export default class Game {

    handleStartBtn(){
    const startBtn = document.querySelector('.start-game-btn');
    const game = new Game();
    startBtn?.addEventListener('click', this.start.bind(game));

  }
  createCards(cardsQuantity:number, cardsType:string) {
    const gameParameters = document.createElement('div');
    gameParameters.innerHTML = `
    <div class="timer-wrapper">
      <p>Time:</p>
    <p class="game-time"></p>
    </div>
    <div class="score-wrapper">
      <p>Score:</p>
      <p class="game-score"></p>
    </div>`;
    gameParameters.classList.add('gameParamaters');
    const cards:HTMLElement = document.createElement('ul');
    const main:HTMLElement = document.querySelector('main')!;
    main.appendChild(gameParameters);
    document.body.appendChild(main);
    cards.classList.add('cards');
      main.appendChild(cards);
    for (let i:number=0; i<cardsQuantity; i++) {
    let element:HTMLElement = document.createElement('li');
    element.classList.add('card-wrapper');
    element.innerHTML = `
    <div class="card">
    <div class="front-side">Front</div>
    <div class="back-side" style = "background-image: url(./images/${cardsType}/${i+1}.jpg)">${i}</div>
    </div>`;
    cards.appendChild(element);
    }
    for (let i:number=0; i<cardsQuantity; i++) {
      let element:HTMLElement = document.createElement('li');
      element.classList.add('card-wrapper');
      element.innerHTML = `
      <div class="card">
      <div class="front-side">Front</div>
      <div class="back-side" style = "background-image: url(./images/${cardsType}/${i+1}.jpg)">${i}</div>
      </div>`;
      cards.appendChild(element);
      }
    }

wrigthSteps:number = 0;
time:number = 0;
timerId:any;
async calculateScore(){
console.log('time', this.time);
let score:number = this.wrigthSteps *100-(this.time*10);
document.querySelector('.game-score')!.innerHTML = String(score);
await this.finish(score);
}
startTimer(){
  let gameTime = document.querySelector('.game-time');
  let sec:number = 0;
  let min:number = 0;
  const calculateTime = () =>{
    this.time += 1;
    if (+sec>=59){
      min += 1;
      sec = 0;
    }
    sec += 1;
    let minDisplay:string = String(min);
    let secDisplay:string = String(sec);
    if (String(min).length===1){
      minDisplay = '0' + min;
    }
    if (String(sec).length===1){
      secDisplay = '0' + sec;
    }
    gameTime!.innerHTML = `${minDisplay}:${secDisplay}`;
    min = +min;
    sec = +sec;
  }
  this.timerId = setInterval(calculateTime, 1000);
}
checkActiveCards() {
  const activeCards = document.querySelectorAll('.active-card');
    if (activeCards.length===2){
      if (activeCards[0].innerHTML===activeCards[1].innerHTML){
        this.wrigthSteps += 1;
        activeCards.forEach(element=>{
          element.classList.remove('active-card');
          element.classList.add('right-cards');
        })
        this.calculateScore();
      } else {
        activeCards.forEach(element=>{
          element.classList.remove('active-card');
          element.classList.add('wrong-cards');
          setTimeout(function(){
            element.classList.remove('wrong-cards');
            element.parentElement!.parentElement!.classList.remove('flipped');
          }, 2000);
        })
      }
  }

}

finish(score:number){
  const flippedCards = document.querySelectorAll('.flipped');
  const allCards = document.querySelectorAll('.card');
  if (flippedCards.length === allCards.length) {
    const congratsPopup = new CongratsPopup();
    congratsPopup.render(score);
  }
  clearInterval(this.timerId);
}

start() {
  this.setGameSettings();
    const cards = document.querySelector('.cards');
    const cardHandle = (event:any) => {
        let target = event.target;
        if (target.classList.contains('front-side')) {
            target.parentElement.parentElement.classList.add('flipped');
            target.nextElementSibling.classList.add('active-card');
            this.checkActiveCards();
        }

    }
    cards!.addEventListener('click', cardHandle);
    this.startTimer();
}

setGameSettings() {
  const router = new Router();
    router.clearAllForm();
  const settings = new Settings();
  const cardsQuantity = settings.getCardsQuantity();
  const cardsType = settings.getCardsType();
  this.createCards(cardsQuantity, cardsType);
}

}
