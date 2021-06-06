import BestScore from '../bestScore/BestScore';

interface DBarrayItem {
  first_name: string,
  second_name: string,
  email: string,
  score: string
}

export default class DataBase {
  static array:DBarrayItem[] = [];

  static checkDublicates(userFirstName:string, userSecondName:string, userEmail:string, userScore:string):void {
    if (DataBase.array.length === 0) {
      DataBase.array.push({
        first_name: `${userFirstName}`, second_name: `${userSecondName}`, email: `${userEmail}`, score: `${userScore}`,
      });
      BestScore.render(DataBase.array);
    } else {
      let dublicates = false;
      let userScorePar = userScore;
      DataBase.array.forEach((item) => {
        if (item.first_name === userFirstName && item.second_name === userSecondName
        && item.email === userEmail) {
          dublicates = true;
          if (+item.score < +userScorePar) {
            item.score = userScorePar;
            userScorePar = '0';
            BestScore.render(DataBase.array);
            DataBase.updateDB();
          } else {
            BestScore.render(DataBase.array);
            DataBase.updateDB();
          }
        }
      });
      if (!dublicates) DataBase.addItem(userFirstName, userSecondName, userEmail, userScore);
    }
  }

  static addItem(userFirstName:string, userSecondName:string, userEmail:string, userScore:string):void {
    let userScorePar = userScore;
    let isAdded = false;
    DataBase.array.forEach((item, index) => {
      if (+item.score < +userScorePar) {
        DataBase.array.splice(index, 0, {
          first_name: `${userFirstName}`,
          second_name: `${userSecondName}`,
          email: `${userEmail}`,
          score: `${userScorePar}`,
        });
        userScorePar = '0';
        isAdded = true;
        if (DataBase.array.length > 10) { DataBase.array.pop(); }
      }
    });
    if (isAdded === false && DataBase.array.length < 10) {
      DataBase.array.push({
        first_name: `${userFirstName}`,
        second_name: `${userSecondName}`,
        email: `${userEmail}`,
        score: `${userScorePar}`,
      });
    }

    BestScore.render(DataBase.array);
    DataBase.updateDB();
  }

  static init():void {
    const openRequest = indexedDB.open('OxanaDanilova', 1);

    openRequest.onupgradeneeded = function upgradeDB() {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains('bestScore')) {
        db.createObjectStore('bestScore', { autoIncrement: true });
      }
    };

    openRequest.onsuccess = function openTransaction() {
      const db = openRequest.result;
      const transaction = db.transaction('bestScore', 'readwrite');
      const bestScore = transaction.objectStore('bestScore');
      const request = bestScore.getAll();
      request.onsuccess = function fillArray() {
        DataBase.array.length = 0;
        DataBase.array = request.result;
        BestScore.render(DataBase.array);
      };
    };
  }

  static updateDB():void {
    const openRequest = indexedDB.open('OxanaDanilova', 1);

    openRequest.onsuccess = function updateArray() {
      const db = openRequest.result;
      const transaction = db.transaction('bestScore', 'readwrite');
      const bestScore = transaction.objectStore('bestScore');
      bestScore.clear();

      DataBase.array.forEach((el) => {
        bestScore.add(el);
      });
    };
  }
}
