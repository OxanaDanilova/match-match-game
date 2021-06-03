import Router from '../router/Router';
import './AboutGame.scss';

export class AboutGame {
  render() {
    const main = document.querySelector('main');
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

    const menu = document.querySelector('.menu');
    const aboutGame = menu.children[0];

    aboutGame.addEventListener('click', this.showAboutGameSection);
  }

  showAboutGameSection() {
    const router = new Router();
    router.clearAllForm();
    const aboutGame = document.querySelector('.about-game-section');
    aboutGame.style.display = 'flex';
  }
}
