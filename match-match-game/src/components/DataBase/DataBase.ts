import BestScore from '../bestScore/BestScore';

interface DBarrayItem {
  first_name: string,
  second_name: string,
  email: string,
  score: string
}

export default class DataBase {
  static array:DBarrayItem[] = [/*
    {"first_name":"Dmitrii1", "second_name":"Panfilov1", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"300"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"220"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"260"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"400"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"250"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"310"} */];

  /*  getMinScore():void {
    const item = this.array[this.array.length - 1].score;
    console.log(item);
  } */

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
          } else {
            BestScore.render(DataBase.array);
          }
        }
      });
      if (!dublicates) DataBase.addItem(userFirstName, userSecondName, userEmail, userScore);
    }
  }

  static addItem(userFirstName:string, userSecondName:string, userEmail:string, userScore:string):void {
    let userScorePar = userScore;
    DataBase.array.forEach((item, index) => {
      if (+item.score < +userScorePar) {
        DataBase.array.splice(index, 0, {
          first_name: `${userFirstName}`,
          second_name: `${userSecondName}`,
          email: `${userEmail}`,
          score: `${userScorePar}`,
        });
        userScorePar = '0';
        DataBase.array.pop();
      }
    });
    console.log(DataBase.array);
    BestScore.render(DataBase.array);
  }
}
