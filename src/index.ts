import './style.scss';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Game from './components/game/Game';
import Settings from './components/settingsGame/Settings';
import { AboutGame } from './components/aboutGame/AboutGame';
import DataBase from './components/DataBase/DataBase';

class App {
  static render() {
    Header.render();
    const registration = new Registration();
    registration.render();
    AboutGame.render();
    Settings.render();
    const game = new Game();
    game.handleStartBtn();
    DataBase.init();
  }
}

App.render();
