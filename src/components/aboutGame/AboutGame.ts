import Router from '../router/Router';
import './AboutGame.scss';

export class AboutGame {
  static render():void {
    const main = <HTMLElement>document.querySelector('main');
    const section = document.createElement('section');
    section.classList.add('about-game-section');
    section.innerHTML = `<h3>How to play?</h3>
    <div class="game-steps">
    <div class="circle">1</div>
    <p>Register new player in game.</p>
    </div>
    <div class="game-steps">
    <div class="circle">2</div>
    <p>Configure your game settings.</p>
    </div>
    <div class="game-steps">
    <div class="circle">3</div>
    <p>Start you new game! Remember card positions and match it.</p>
    </div>
    `;
    main.appendChild(section);

    const menu = <HTMLElement>document.querySelector('.menu');
    const aboutGameMenuItem = menu.children[0];

    aboutGameMenuItem.addEventListener('click', AboutGame.showAboutGameSection);
  }

  static showAboutGameSection():void {
    Router.clearAllForm();
    const aboutGame = <HTMLElement>document.querySelector('.about-game-section');
    aboutGame.style.display = 'flex';
  }
}
