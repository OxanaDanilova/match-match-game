import './Header.scss';
export default class Header {
  render() {
    const header = document.createElement('header');
    document.body.appendChild(header);
    const nav = document.createElement('nav');
    nav.classList.add('menu-nav');
    header.appendChild(nav);
    const ul = document.createElement('ul');
    ul.classList.add('menu');
    nav.appendChild(ul);
    const menuArr = ['About Game', 'Settings', 'Best Score'];
    for (let i=0; i<3; i += 1){
      let li = document.createElement('li');
      if (i===0){
        li.classList.add('menu-active');
      }
      li.innerHTML = menuArr[i];
      ul.appendChild(li);
    }

    const regBtn = document.createElement('button');
    regBtn.innerHTML = 'Register';
    regBtn.classList.add('register-btn');
    header.appendChild(regBtn);

  }

}
