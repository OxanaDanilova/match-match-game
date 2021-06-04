import './style.scss';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Game from './components/game/Game';
import Settings from './components/settingsGame/Settings';
import BestScore from './components/bestScore/BestScore';
import { AboutGame } from './components/aboutGame/AboutGame';

class App {
  static render() {
    //const header = new Header();
    Header.render();
    const registration = new Registration();
    registration.render();
    const aboutGame = new AboutGame();
    aboutGame.render();
    // const settings = new Settings();
    Settings.render();
    const game = new Game();
    game.handleStartBtn();
    const bestScore = new BestScore();
    bestScore.render([]);
  }
}

// const app = new App();
App.render();
