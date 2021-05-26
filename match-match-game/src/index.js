import './style.scss';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Settings from './components/settingsGame/Settings';
//import Game from './components/game/Game';

class App {
  render() {
    const header = new Header();
    header.render();
   const registration = new Registration();
   registration.render();
   const settings = new Settings();
   settings.render();
  // const game = new Game()

  }
}

const app = new App();
app.render();
