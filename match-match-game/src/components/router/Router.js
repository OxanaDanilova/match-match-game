export default class Router {
  clearAllForm(){
    if (document.querySelector('.about-game-section')){
      document.querySelector('.about-game-section').style.display = 'none';
    }
    if (document.querySelector('.register-form')){
      document.querySelector('.register-form').style.display = 'none';
    }

    if (document.querySelector('.settings-wrapper')){
      document.querySelector('.settings-wrapper').style.display = 'none';
    }

    if (document.querySelector('.best-score-section')){
      document.querySelector('.best-score-section').style.display = 'none';
    }

    if (document.querySelector('.cards')){
      document.querySelector('.cards').style.display = 'none';
    }
    if (document.querySelector('.gameParamaters')){
      document.querySelector('.gameParamaters').style.display = 'none';
    }


  }
}
