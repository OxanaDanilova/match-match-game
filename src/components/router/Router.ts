export default class Router {
  static clearAllForm():void {
    if (document.querySelector('.about-game-section')) {
      const aboutGameEl = <HTMLDivElement>document.querySelector('.about-game-section');
      aboutGameEl.style.display = 'none';
    }
    if (document.querySelector('.register-form')) {
      const registerForm = <HTMLDivElement>document.querySelector('.register-form');
      registerForm.style.display = 'none';
    }

    if (document.querySelector('.settings-wrapper')) {
      const settingsWrapper = <HTMLDivElement>document.querySelector('.settings-wrapper');
      settingsWrapper.style.display = 'none';
    }

    if (document.querySelector('.best-score-section')) {
      const bestScoreSection = <HTMLDivElement>document.querySelector('.best-score-section');
      bestScoreSection.style.display = 'none';
    }

    if (document.querySelector('.cards')) {
      const cards = <HTMLDivElement>document.querySelector('.cards');
      cards.style.display = 'none';
    }
    if (document.querySelector('.gameParamaters')) {
      const gameParamaters = <HTMLDivElement>document.querySelector('.gameParamaters');
      gameParamaters.style.display = 'none';
    }

    if (document.querySelector('.congr-wrapper')) {
      const congrWrapper = <HTMLDivElement>document.querySelector('.congr-wrapper');
      congrWrapper.style.display = 'none';
    }
  }
}
