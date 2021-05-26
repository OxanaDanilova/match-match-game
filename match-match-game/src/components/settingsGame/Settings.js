import './Settings.scss';
export default class Settings {
  render(){
    const main = document.querySelector('main');
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
            <input type="submit" value="Submit">
    `;
    main.appendChild(settingsForm);

    const menu = document.querySelector('.menu');
    const setting = menu.children[1];

    setting.addEventListener('click', this.showSettingsForm);


  }
  showSettingsForm() {
    const registerForm = document.querySelector('.register-form');
    registerForm.style.display = 'none';
    const settingsForm = document.querySelector('.settings-wrapper');
    settingsForm.style.display = 'flex';
  }
}
