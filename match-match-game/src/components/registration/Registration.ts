import './Registration.scss';
import Header from '../header/Header';
import Router from '../router/Router';

export default class Registration {
  render():void {
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
    const regBtn = <HTMLButtonElement>document.querySelector('.register-btn');
    regBtn.addEventListener('click', Registration.displayForm);
    const userFirstName = <HTMLInputElement>document.querySelector('#first-name');
    const userSecondName = <HTMLInputElement>document.querySelector('#second-name');
    const userEmail = <HTMLInputElement>document.querySelector('#email');

    userFirstName.addEventListener('keyup', (event) => Registration.checkFormInputs(event.target as HTMLInputElement));
    userSecondName.addEventListener('keyup', (event) => Registration.checkFormInputs(event.target as HTMLInputElement));
    userEmail.addEventListener('keyup', (event) => Registration.checkEmail(event.target as HTMLInputElement));

    const form = document.querySelector('.register-form');
    if (!form) throw new Error('Registration form is not found!');
    form.addEventListener('submit', this.createUser);

    const cancelBtn = document.querySelector('.cancel-btn');
    if (!cancelBtn) throw new Error('Cancel button is not found!');
    cancelBtn.addEventListener('click', Registration.clearForm);
  }

  static clearForm():void {
    const allFields = document.querySelectorAll('.form-field-wrapper');
    allFields.forEach((el) => {
      if (el.classList.contains('success')) {
        el.classList.remove('success');
      }
      if (el.classList.contains('error')) {
        el.classList.remove('error');
      }
    });
  }

  static displayForm():void {
    Router.clearAllForm();
    const form = <HTMLFormElement>document.querySelector('.register-form');
    if (!form) throw new Error('Registration form is not found!');
    form.style.display = 'flex';
  }

  static isFormComplete():void {
    const fullFields = document.querySelectorAll('.success');
    const submitBtn = <HTMLButtonElement>document.querySelector('.submit-btn');
    if (!submitBtn) throw new Error('Submit button is not found!');
    if (fullFields.length === 3) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  static checkFormInputs(element:HTMLInputElement):void {
    const regNumber = /[0-9]/g;
    const regChar = /[~!@#$%*()_—+=|:;"'`<>,.?/^]/g;
    let message = '';
    if (element.value.trim() === '') {
      message = 'This field can not be empty!';
      Registration.setErrorStatus(element, message);
    } else if ((regNumber.test(element.value.trim()) === true)
    || (regChar.test(element.value.trim()) === true)) {
      message = 'This field can\'t contain numbers oder ~!@#$%*()_—+=|:;"\'<>,.?/^&#x60;';
      Registration.setErrorStatus(element, message);
    } else {
      Registration.setSuccessStatus(element);
    }
    Registration.isFormComplete();
  }

  static checkEmail(element:HTMLInputElement):void {
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let message = '';
    if (element.value.trim() === '') {
      message = 'This field can not be empty!';
      Registration.setErrorStatus(element, message);
    } else if (regEmail.test(element.value.trim()) === false) {
      message = 'Email is not valid!';
      Registration.setErrorStatus(element, message);
    } else {
      Registration.setSuccessStatus(element);
    }
    Registration.isFormComplete();
  }

  static setErrorStatus(element:HTMLElement, message:string):void {
    const parent = element.parentElement;
    if (!parent) { throw new Error('Parent element is not found!'); }
    if (parent.classList.contains('success')) {
      parent.classList.remove('success');
    }
    parent.classList.add('error');
    parent.children[4].innerHTML = message;
  }

  static setSuccessStatus(element:HTMLInputElement):void {
    const parent = element.parentElement;
    if (!parent) { throw new Error('Parent element is not found!'); }
    if (parent.classList.contains('error')) {
      parent.classList.remove('error');
    }
    parent.classList.add('success');
  }

  createUser = (event:Event):void => {
    event.preventDefault();
    const userFirstNameElem = <HTMLInputElement>document.querySelector('#first-name');
    const userSecondNameElem = <HTMLInputElement>document.querySelector('#second-name');
    const userEmailElem = <HTMLInputElement>document.querySelector('#email');

    const userFirstName = userFirstNameElem.value.trim();
    const userSecondName = userSecondNameElem.value.trim();
    const userEmail = userEmailElem.value.trim();

    Header.displayStartGame(userFirstName, userSecondName, userEmail);
    const form = <HTMLFormElement>document.querySelector('.register-form');
    if (!form) throw new Error('Registration form is not found!');
    form.style.display = 'none';
    Registration.clearForm();
  };
}
