import './Registration.scss'
export default class Registration {
  render() {
    const main = document.createElement('main');
    main.innerHTML = `<form action="" class="register-form">
    <div class="register-form-wrapper">
      <h4>Registration</h4>
    <label for="first-name">First Name
      <input type="text" name="first-name" id="first-name" maxlength="30" pattern="^[0-9]{1-30}" required>
    </label>

    <label for="second-name">Second Name
      <input type="text" name="second-name" id="second-name" maxlength="30" required>
    </label>

    <label for="email">Email
      <input type="email" name="email" id="email" maxlength="30" required>
    </label>
    <div class="form-btn-wrapper">
      <input type="submit" value="Submit" class="submit-btn">
      <input type="reset" value="Cancel" class = "cancel-btn">

    </div>
  </div>
</form>
    `;
    document.body.appendChild(main);
    const regBtn = document.querySelector('.register-btn');
    regBtn.addEventListener('click', this.displayForm);
    const firstNameInput = document.querySelector('#first-name');
    console.log(firstNameInput);
    firstNameInput.addEventListener('keydown', this.validationForm);

  }
  displayForm() {
    const form = document.querySelector('.register-form');
    form.style.display = 'flex';
  }
  validationForm = (event)=> {
    let inputValue = event.target.value;
    let reg1 = /\w+/g;
    let reg2 = /\.|\?/g;
  let reg3 = /^(\w){1,30}$/;
  let reg4 = /[0-9]/g;
  let result;
   // if(inputValue.length==30) return false;       ~|!|@|#|$|%|*|(|)|_|—|+|=|\|:|;|"|'|`|<|>|,|
  /* if (reg1.test(inputValue) && reg2.test(inputValue) && !reg3.test(inputValue)) {
  result = true;
  } else {
    result = false;
  } */
  console.log(inputValue);
  if (reg4.test(inputValue)) return false;

}
}
