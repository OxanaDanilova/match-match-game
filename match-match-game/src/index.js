import './style.scss';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
//import Game from './components/game/Game';

class App {
  render() {
    const header = new Header();
    header.render();
   const registration = new Registration();
   registration.render();
  // const game = new Game()

  }
}

const app = new App();
app.render();
