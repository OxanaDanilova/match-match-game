import CongratsPopup from '../congratsPopup/CongratsPopup';
import Router from '../router/Router';
import Settings from '../settingsGame/Settings';
import './Game.scss';

export default class Game {
  handleStartBtn():void {
    const startBtn = <HTMLButtonElement>document.querySelector('.start-game-btn');
    const game = new Game();
    startBtn.addEventListener('click', this.start.bind(game));
  }

  static createCards(cardsQuantity:number, cardsType:string):void {
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
    const main = <HTMLElement>document.querySelector('main');
    main.appendChild(gameParameters);
    document.body.appendChild(main);
    cards.classList.add('cards');
    main.appendChild(cards);

    const urlArray = [];

    for (let i = 0; i < cardsQuantity; i++) {
      urlArray.push(i);
    }
    urlArray.concat(urlArray)
      .sort(() => Math.random() - 0.5)
      .map((url) => {
        const element:HTMLElement = document.createElement('li');
        element.classList.add('card-wrapper');
        element.innerHTML = `
    <div class="card">
    <div class="front-side"></div>
    <div class="back-side" style = "background-image: url(./images/${cardsType}/${url + 1}.jpg)">${url}</div>
    </div>`;
        cards.appendChild(element);
        return url;
      });
  }

  wrigthSteps = 0;

  time = 0;

  timerId = 0;

  async calculateScore():Promise<void> {
    let score:number = this.wrigthSteps * 100 - (this.time * 10);
    if (score < 0) { score = 0; }
    const gameScoreEl = <HTMLElement>document.querySelector('.game-score');
    gameScoreEl.innerHTML = String(score);
    await this.finish(score);
  }

  startTimer():void {
    const gameTime = <HTMLElement>document.querySelector('.game-time');
    let sec = 0;
    let min = 0;
    const calculateTime = () => {
      this.time += 1;
      if (+sec >= 59) {
        min += 1;
        sec = 0;
      }
      sec += 1;
      let minDisplay = String(min);
      let secDisplay = String(sec);
      if (String(min).length === 1) {
        minDisplay = `0${min}`;
      }
      if (String(sec).length === 1) {
        secDisplay = `0${sec}`;
      }
      gameTime.innerHTML = `${minDisplay}:${secDisplay}`;
      min = +min;
      sec = +sec;
    };
    this.timerId = window.setInterval(calculateTime, 1000);
  }

  checkActiveCards():void {
    const activeCards = document.querySelectorAll('.active-card');
    if (activeCards.length === 2) {
      if (activeCards[0].innerHTML === activeCards[1].innerHTML) {
        this.wrigthSteps += 1;
        activeCards.forEach((element) => {
          element.classList.remove('active-card');
          element.classList.add('right-cards');
        });
        this.calculateScore();
      } else {
        activeCards.forEach((element) => {
          element.classList.remove('active-card');
          element.classList.add('wrong-cards');
          setTimeout(() => {
            element.classList.remove('wrong-cards');
            const parentEl = <HTMLElement>element.parentElement;
            const secParentEl = <HTMLElement>parentEl.parentElement;
            secParentEl.classList.remove('flipped');
          }, 2000);
        });
      }
    }
  }

  finish(score:number):void {
    const flippedCards = document.querySelectorAll('.flipped');
    const allCards = document.querySelectorAll('.card');
    if (flippedCards.length === allCards.length) {
      CongratsPopup.render(score);
      clearInterval(this.timerId);
      this.wrigthSteps = 0;
      this.time = 0;
    }
  }

  start():void {
    const main = <HTMLElement>document.querySelector('main');
    if (document.querySelector('.cards')) {
      const cards = <HTMLElement>document.querySelector('.cards');
      main.removeChild(cards);
    }
    if (document.querySelector('.gameParamaters')) {
      const gameParamaters = <HTMLElement>document.querySelector('.gameParamaters');
      main.removeChild(gameParamaters);
    }
    Game.setGameSettings();
    const cards = <HTMLElement>document.querySelector('.cards');
    const cardHandle = (event:Event) => {
      const target = <HTMLElement>event.target;
      if (target.classList.contains('front-side')) {
        const parentEl = <HTMLElement>target.parentElement;
        const secParentEl = <HTMLElement>parentEl.parentElement;
        secParentEl.classList.add('flipped');
        const nextSibling = <HTMLElement>target.nextElementSibling;
        nextSibling.classList.add('active-card');
        this.checkActiveCards();
      }
    };
    cards.addEventListener('click', cardHandle);
    this.startTimer();
  }

  static setGameSettings():void {
    Router.clearAllForm();
    const cardsQuantity = Settings.getCardsQuantity();
    const cardsType = Settings.getCardsType();
    Game.createCards(cardsQuantity, cardsType);
  }
}
