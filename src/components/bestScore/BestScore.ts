import Router from '../router/Router';
import './BestScore.scss';

interface DBarrayItem {
  first_name: string,
  second_name: string,
  email: string,
  score: string
}

export default class BestScore {
  static render(array:DBarrayItem[]):void {
    const main = <HTMLElement>document.querySelector('main');
    if (document.querySelector('.best-score-section')) {
      const sec = <HTMLElement>document.querySelector('.best-score-section');
      main.removeChild(sec);
    }
    const scoreSection = document.createElement('section');
    scoreSection.classList.add('best-score-section');
    scoreSection.innerHTML = `
    <h3>Best players:</h3>
    `;
    const ul = document.createElement('ul');
    ul.classList.add('score-table');
    scoreSection.appendChild(ul);
    for (let i = 0; i < array.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="user-data">
      <div>
        <p class="user-first-name">${array[i].first_name}</p>
        <p class="user-second-name">${array[i].second_name}</p>
      </div>
      <p class="user-email">${array[i].email}</p>
    </div>
    <div class="score-wrapper">
      <p>Score</p>
      <p class="user-score">${array[i].score}</p>
    </div>`;
      ul.appendChild(li);
    }
    scoreSection.appendChild(ul);
    main.appendChild(scoreSection);

    const menu = <HTMLElement>document.querySelector('.menu');
    const bestScore = menu.children[2];

    bestScore.addEventListener('click', BestScore.showBestScoreSection);
  }

  static showBestScoreSection():void {
    Router.clearAllForm();
    const scoreSection = <HTMLElement>document.querySelector('.best-score-section');
    scoreSection.style.display = 'flex';
  }
}
