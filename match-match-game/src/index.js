import './style.scss';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Game from './components/game/Game';
import Settings from './components/settingsGame/Settings';
import BestScore from './components/bestScore/BestScore';
import DataBase from './components/DataBase/DataBase';
import { AboutGame } from './components/aboutGame/AboutGame';

class App {
  render() {
    const header = new Header();
    header.render();
   const registration = new Registration();
   registration.render();
   const aboutGame = new AboutGame();
   aboutGame.render();
   const settings = new Settings();
   settings.render();
   const game = new Game();
  game.handleStartBtn();
  const bestScore = new BestScore();
  bestScore.render([]);
 // const db = new DataBase();
 // db.checkDublicates("Dmitrii1", "Panfilov1", "df@ff.ff", 180);
  }
}

const app = new App();
app.render();
