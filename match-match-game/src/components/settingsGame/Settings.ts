import Router from '../router/Router';
import './Settings.scss';

export default class Settings {
  static render():void {
    const main = document.querySelector('main');
    if (!main) { throw new Error('Main element is not found!'); }

    const settingsForm = document.createElement('form');
    settingsForm.classList.add('settings-wrapper');
    settingsForm.innerHTML = `
    <section>
      <label for="cardsType">Game cards</label>
      <select name="cardsType" id="cardsType">
        <option value="animal">Animal</option>
        <option value="fish">Fish</option>
        <option value="forest">Forest</option>
      </select>
    </section>
    <section>
      <label for="cardsQuantity">Difficulty</label>
      <select name="cardsQuantity" id="cardsQuantity">
        <option value="4">4x4</option>
        <option value="6">6x6</option>
        <option value="8">8x8</option>
      </select>
    </section>
    `;
    main.appendChild(settingsForm);

    const menu = document.querySelector('.menu');
    if (!menu) { throw new Error('Menu element is not found!'); }

    const setting = menu.children[1];

    setting.addEventListener('click', Settings.showSettingsForm);
  }

  static showSettingsForm():void {
    Router.clearAllForm();
    const settingsForm = <HTMLFormElement>document.querySelector('.settings-wrapper');
    if (!settingsForm) { throw new Error('Settings form is not found!'); }
    settingsForm.style.display = 'flex';
  }

  static getCardsQuantity():number {
    const quantityCardsElement = <HTMLSelectElement>document.querySelector('#cardsQuantity');
    if (!quantityCardsElement) { throw new Error('Element is not found!'); }
    const quantityCards = quantityCardsElement.value;
    return +quantityCards;
  }

  static getCardsType():string {
    const typeCardsElement = <HTMLSelectElement>document.querySelector('#cardsType');
    const typeCards = typeCardsElement.value;
    return typeCards;
  }
}
