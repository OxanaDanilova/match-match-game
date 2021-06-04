import BestScore from '../bestScore/BestScore';

export default class DataBase {
  array = [/* {"first_name":"Dmitrii1", "second_name":"Panfilov1", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"300"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"220"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"260"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"200"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"400"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"250"},
  {"first_name":"Dmitrii", "second_name":"Panfilov", "email":"df@ff.ff", "score":"310"} */];

  getMinScore() {
    const item = this.array[this.array.length - 1].score;
    console.log(item);
  }

  checkDublicates(userFirstName, userSecondName, userEmail, userScore) {
    if (this.array.length === 0) {
      this.array.push({
        first_name: `${userFirstName}`, second_name: `${userSecondName}`, email: `${userEmail}`, score: `${userScore}`,
      });
      BestScore.render(this.array);
    } else {
      let dublicates = false;
      this.array.forEach((item) => {
        if (item.first_name === userFirstName && item.second_name === userSecondName
        && item.email === userEmail) {
          dublicates = true;
          if (+item.score < +userScore) {
            item.score = userScore;
            userScore = 0;
            BestScore.render(this.array);
          } else {
            BestScore.render(this.array);
          }
        }
      });
      if (!dublicates) this.addItem(userFirstName, userSecondName, userEmail, userScore);
    }
  }

  addItem(userFirstName, userSecondName, userEmail, userScore) {
    this.array.forEach((item, index) => {
      if (+item.score < +userScore) {
        this.array.splice(index, 0, {
          first_name: `${userFirstName}`, second_name: `${userSecondName}`, email: `${userEmail}`, score: `${userScore}`,
        });
        userScore = 0;
        this.array.pop();
      }
    });
    console.log(this.array);
    BestScore.render(this.array);
  }
}
