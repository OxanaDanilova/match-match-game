import Router from "../router/Router";

export class AboutGame {
  render() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.classList.add('about-game-section');
    section.innerHTML = `<p>About Game!</p>`;
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
