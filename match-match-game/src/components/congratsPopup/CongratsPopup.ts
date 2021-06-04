import DataBase from '../DataBase/DataBase';
import Router from '../router/Router';
import './CongratsPopup.scss';

export default class CongratsPopup {
  static render(score:number):void {
    const div = document.createElement('div');
    div.innerHTML = `
    <p>Congratulations!</p>
    <p>Your score is <span class="score">${score}</span>!!!</p>
    <button class="btn-close">Ok</button>`;
    div.classList.add('congr-wrapper');
    div.style.display = 'flex';
    const main = <HTMLElement>document.querySelector('main');
    main.appendChild(div);
    const btnClose = <HTMLButtonElement>document.querySelector('.btn-close');
    btnClose.addEventListener('click', CongratsPopup.closeCongrPopup);
  }

  static closeCongrPopup():void {
    const scoreEl = <HTMLElement>document.querySelector('.score');
    const score = scoreEl.innerHTML.trim();
    const db = new DataBase();
    const userFirstNameEl = <HTMLElement>document.querySelector('.firstName');
    const userFirstName = userFirstNameEl.innerHTML;
    const userSecondNameEl = <HTMLElement>document.querySelector('.secondName');
    const userSecondName = userSecondNameEl.innerHTML;
    const userEmailEl = <HTMLElement>document.querySelector('.email');
    const userEmail = userEmailEl.innerHTML;
    db.checkDublicates(userFirstName, userSecondName, userEmail, score);
    const congrPopup = <HTMLElement>document.querySelector('.congr-wrapper');
    const main = <HTMLElement>document.querySelector('main');
    main.removeChild(congrPopup);
    Router.clearAllForm();
    const bestScoreSec = <HTMLElement>document.querySelector('.best-score-section');
    bestScoreSec.style.display = 'flex';
  }
}
