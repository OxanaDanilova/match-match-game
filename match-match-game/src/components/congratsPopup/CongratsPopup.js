import DataBase from '../DataBase/DataBase';
import Router from '../router/Router';
import './CongratsPopup.scss';
export default class CongratsPopup{
   render(score){
    const div = document.createElement('div');
    div.innerHTML = `
    <p>Congratulations!</p>
    <p>Your score is <span class="score">${score}</span>!!!</p>
    <button class="btn-close">Ok</button>`;
    div.classList.add('congr-wrapper');
    div.style.display = 'flex';
    const main = document.querySelector('main');
     main?.appendChild(div);
     const btnClose = document.querySelector('.btn-close');
     btnClose?.addEventListener('click', this.closeCongrPopup);

  }

  closeCongrPopup() {
    const score = document.querySelector('.score').innerHTML.trim();
    const db = new DataBase();
    const userFirstName = document.querySelector('.firstName').innerHTML;
    const userSecondName = document.querySelector('.secondName').innerHTML;
    const userEmail = document.querySelector('.email').innerHTML;
    console.log('user data:', userFirstName,userSecondName, userEmail, score);
    db.checkDublicates(userFirstName,userSecondName, userEmail, score);
    const congrPopup = document.querySelector('.congr-wrapper');
    const main = document.querySelector('main');
    main.removeChild(congrPopup);
    const router = new Router();
    router.clearAllForm();
    document.querySelector('.best-score-section').style.display = 'flex';
  }
}
