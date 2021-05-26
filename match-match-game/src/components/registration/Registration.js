import './Registration.scss';
import User from '../user/User';
import Header from '../header/Header';
import Game from '../game/Game';
export default class Registration {
  render() {
    const main = document.createElement('main');
    main.innerHTML = `
    <form action="" class="register-form">
      <div class="register-form-wrapper">
        <h4>Registration</h4>
        <div class="form-field-wrapper">
          <label for="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" maxlength="30"
            title="First name field can contain only letters (no numbers or special characters)">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <p class="error-message">Error message</p>
        </div>
        <div class="form-field-wrapper">
          <label for="second-name">Second Name</label>
          <input type="text" name="second-name" id="second-name" maxlength="30"
            title="Last name field can contain only letters (no numbers or special characters)">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <p class="error-message">Error message</p>
        </div>
        <div class="form-field-wrapper">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" maxlength="30">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <p class="error-message">Error message</p>
        </div>
        <div class="form-btn-wrapper">
          <input type="submit" value="Add user" class="submit-btn" disabled>
          <input type="reset" value="Cancel" class="cancel-btn">

        </div>
      </div>
    </form>`;
    document.body.appendChild(main);
    const regBtn = document.querySelector('.register-btn');
    regBtn.addEventListener('click', this.displayForm);
    const userFirstName = document.querySelector('#first-name');
    const userSecondName = document.querySelector('#second-name');
    const userEmail = document.querySelector('#email');

    userFirstName.addEventListener('keyup', (event)=>this.checkFormInputs(event.target));
    userSecondName.addEventListener('keyup', (event)=>this.checkFormInputs(event.target));
    userEmail.addEventListener('keyup', (event)=>this.checkEmail(event.target));
    const form = document.querySelector('.register-form');
    form.addEventListener('submit', this.createUser);

    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', this.clearForm);

  }
  clearForm() {
    const allFields = document.querySelectorAll('.form-field-wrapper');
    allFields.forEach((el)=> {
      if (el.classList.contains('success')){
        el.classList.remove('success');
      }
      if (el.classList.contains('error')){
        el.classList.remove('error');
      }
    })
  }
  displayForm() {
    const form = document.querySelector('.register-form');
    form.style.display = 'flex';
  }

isFormComplete() {
  const fullFields = document.querySelectorAll('.success');
  const submitBtn = document.querySelector('.submit-btn');
  if (fullFields.length === 3) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkFormInputs(element){
  const regNumber = /[0-9]/g;
  const regChar = /[~!@#$%*()_—+=|:;"'`<>,.?/^]/g;
  let message = '';
  if (element.value.trim()===''){
    message = 'This field can not be empty!';
    this.setErrorStatus(element, message);
  } else {
    if ((regNumber.test(element.value.trim())===true) ||
    (regChar.test(element.value.trim())===true))  {
      message = `This field can't contain numbers oder ~!@#$%*()_—+=|:;"'<>,.?/^&#x60;`;
      this.setErrorStatus(element, message);
  } else {
    this.setSuccessStatus(element);
  }
  }
  this.isFormComplete();
}

checkEmail(element) {
  const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let message = '';
  if (element.value.trim()===''){
    message = 'This field can not be empty!';
    this.setErrorStatus(element, message);
  } else {
    if (regEmail.test(element.value.trim())===false) {
      message = 'Email is not valid!';
      this.setErrorStatus(element, message);
  } else {
    this.setSuccessStatus(element);
  }
}
this.isFormComplete();
}

setErrorStatus(element, message) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')){
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  parent.children[4].innerHTML = message;
}

setSuccessStatus(element) {
const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  };
  parent.classList.add('success');
}

createUser = (event)=> {
  event.preventDefault();
  const userFirstName = document.querySelector('#first-name').value.trim();
  const userSecondName = document.querySelector('#second-name').value.trim();
  const userEmail = document.querySelector('#email').value.trim();
  const user = new User(userFirstName, userSecondName, userEmail);
  const header = new Header();
  console.log('fisrtName', user.firstName);
  header.displayStartGame(userFirstName, userSecondName);
  const game = new Game();
  game.createCards(4);
  game.start();
  const form = document.querySelector('.register-form');
  form.style.display = 'none';
  this.clearForm();

}
}
