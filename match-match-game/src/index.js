import './style.scss';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Game from './components/game/Game';
import Settings from './components/settingsGame/Settings';

class App {
  render() {
    const header = new Header();
    header.render();
   const registration = new Registration();
   registration.render();
   const settings = new Settings();
   settings.render();
   const game = new Game();
  game.handleStartBtn();
  }
}

const app = new App();
app.render();
