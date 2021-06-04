(()=>{"use strict";var e={234:(e,t,r)=>{r.r(t)},157:(e,t,r)=>{r.r(t)},939:(e,t,r)=>{r.r(t)},912:(e,t,r)=>{r.r(t)},882:(e,t,r)=>{r.r(t)},784:(e,t,r)=>{r.r(t)},571:(e,t,r)=>{r.r(t)},373:(e,t,r)=>{r.r(t)},745:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r(755));class a{static checkDublicates(e,t,r,n){if(0===a.array.length)a.array.push({first_name:`${e}`,second_name:`${t}`,email:`${r}`,score:`${n}`}),s.default.render(a.array);else{let c=!1,o=n;a.array.forEach((n=>{n.first_name===e&&n.second_name===t&&n.email===r&&(c=!0,+n.score<+o?(n.score=o,o="0",s.default.render(a.array)):s.default.render(a.array))})),c||a.addItem(e,t,r,n)}}static addItem(e,t,r,n){let c=n;a.array.forEach(((n,s)=>{+n.score<+c&&(a.array.splice(s,0,{first_name:`${e}`,second_name:`${t}`,email:`${r}`,score:`${c}`}),c="0",a.array.pop())})),s.default.render(a.array)}}t.default=a,a.array=[]},964:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AboutGame=void 0;const s=n(r(42));r(234);class a{static render(){const e=document.querySelector("main"),t=document.createElement("section");t.classList.add("about-game-section"),t.innerHTML='<h3>How to play?</h3>\n    <div class="game-steps">\n    <div class="circle">1</div>\n    <p>Register new player in game.</p>\n    </div>\n    <div class="game-steps">\n    <div class="circle">2</div>\n    <p>Configure your game settings.</p>\n    </div>\n    <div class="game-steps">\n    <div class="circle">3</div>\n    <p>Start you new game! Remember card positions and match it.</p>\n    </div>\n    ',e.appendChild(t),document.querySelector(".menu").children[0].addEventListener("click",a.showAboutGameSection)}static showAboutGameSection(){s.default.clearAllForm(),document.querySelector(".about-game-section").style.display="flex"}}t.AboutGame=a},755:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r(42));r(157);class a{static render(e){const t=document.querySelector("main");if(document.querySelector(".best-score-section")){const e=document.querySelector(".best-score-section");t.removeChild(e)}const r=document.createElement("section");r.classList.add("best-score-section"),r.innerHTML="\n    <h3>Best players:</h3>\n    ";const n=document.createElement("ul");n.classList.add("score-table"),r.appendChild(n);for(let t=0;t<e.length;t+=1){const r=document.createElement("li");r.innerHTML=`\n      <div class="user-data">\n      <div>\n        <p class="user-first-name">${e[t].first_name}</p>\n        <p class="user-second-name">${e[t].second_name}</p>\n      </div>\n      <p class="user-email">${e[t].email}</p>\n    </div>\n    <div class="score-wrapper">\n      <p>Score</p>\n      <p class="user-score">${e[t].score}</p>\n    </div>`,n.appendChild(r)}r.appendChild(n),t.appendChild(r),document.querySelector(".menu").children[2].addEventListener("click",a.showBestScoreSection)}static showBestScoreSection(){s.default.clearAllForm(),document.querySelector(".best-score-section").style.display="flex"}}t.default=a},719:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r(745)),a=n(r(42));r(939);class c{static render(e){const t=document.createElement("div");t.innerHTML=`\n    <p>Congratulations!</p>\n    <p>Your score is <span class="score">${e}</span>!!!</p>\n    <button class="btn-close">Ok</button>`,t.classList.add("congr-wrapper"),t.style.display="flex",document.querySelector("main").appendChild(t),document.querySelector(".btn-close").addEventListener("click",c.closeCongrPopup)}static closeCongrPopup(){const e=document.querySelector(".score").innerHTML.trim(),t=document.querySelector(".firstName").innerHTML,r=document.querySelector(".secondName").innerHTML,n=document.querySelector(".email").innerHTML;s.default.checkDublicates(t,r,n,e);const c=document.querySelector(".congr-wrapper");document.querySelector("main").removeChild(c),a.default.clearAllForm(),document.querySelector(".best-score-section").style.display="flex"}}t.default=c},255:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function c(e){try{i(n.next(e))}catch(e){a(e)}}function o(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,o)}i((n=n.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(719)),c=s(r(42)),o=s(r(836));r(912);class i{constructor(){this.wrigthSteps=0,this.time=0,this.timerId=0}handleStartBtn(){const e=document.querySelector(".start-game-btn"),t=new i;e.addEventListener("click",this.start.bind(t))}static createCards(e,t){const r=document.createElement("div");r.innerHTML='\n    <div class="timer-wrapper">\n      <p>Time:</p>\n    <p class="game-time"></p>\n    </div>\n    <div class="score-wrapper">\n      <p>Score:</p>\n      <p class="game-score"></p>\n    </div>',r.classList.add("gameParamaters");const n=document.createElement("ul"),s=document.querySelector("main");s.appendChild(r),document.body.appendChild(s),n.classList.add("cards"),s.appendChild(n);for(let r=0;r<e;r++){const e=document.createElement("li");e.classList.add("card-wrapper"),e.innerHTML=`\n    <div class="card">\n    <div class="front-side"></div>\n    <div class="back-side" style = "background-image: url(./images/${t}/${r+1}.jpg)">${r}</div>\n    </div>`,n.appendChild(e)}for(let r=0;r<e;r++){const e=document.createElement("li");e.classList.add("card-wrapper"),e.innerHTML=`\n      <div class="card">\n      <div class="front-side"></div>\n      <div class="back-side" style = "background-image: url(./images/${t}/${r+1}.jpg)">${r}</div>\n      </div>`,n.appendChild(e)}}calculateScore(){return n(this,void 0,void 0,(function*(){let e=100*this.wrigthSteps-10*this.time;e<0&&(e=0),document.querySelector(".game-score").innerHTML=String(e),yield this.finish(e)}))}startTimer(){const e=document.querySelector(".game-time");let t=0,r=0;this.timerId=window.setInterval((()=>{this.time+=1,+t>=59&&(r+=1,t=0),t+=1;let n=String(r),s=String(t);1===String(r).length&&(n=`0${r}`),1===String(t).length&&(s=`0${t}`),e.innerHTML=`${n}:${s}`,r=+r,t=+t}),1e3)}checkActiveCards(){const e=document.querySelectorAll(".active-card");2===e.length&&(e[0].innerHTML===e[1].innerHTML?(this.wrigthSteps+=1,e.forEach((e=>{e.classList.remove("active-card"),e.classList.add("right-cards")})),this.calculateScore()):e.forEach((e=>{e.classList.remove("active-card"),e.classList.add("wrong-cards"),setTimeout((()=>{e.classList.remove("wrong-cards"),e.parentElement.parentElement.classList.remove("flipped")}),2e3)})))}finish(e){const t=document.querySelectorAll(".flipped"),r=document.querySelectorAll(".card");t.length===r.length&&(a.default.render(e),clearInterval(this.timerId),this.wrigthSteps=0,this.time=0)}start(){const e=document.querySelector("main");if(document.querySelector(".cards")){const t=document.querySelector(".cards");e.removeChild(t)}if(document.querySelector(".gameParamaters")){const t=document.querySelector(".gameParamaters");e.removeChild(t)}i.setGameSettings(),document.querySelector(".cards").addEventListener("click",(e=>{const t=e.target;t.classList.contains("front-side")&&(t.parentElement.parentElement.classList.add("flipped"),t.nextElementSibling.classList.add("active-card"),this.checkActiveCards())})),this.startTimer()}static setGameSettings(){c.default.clearAllForm();const e=o.default.getCardsQuantity(),t=o.default.getCardsType();i.createCards(e,t)}}t.default=i},973:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(882),t.default=class{static render(){const e=document.createElement("header");document.body.appendChild(e);const t=document.createElement("nav");t.classList.add("menu-nav"),e.appendChild(t);const r=document.createElement("ul");r.classList.add("menu"),t.appendChild(r);const n=["About Game","Settings","Best Score"];for(let e=0;e<3;e+=1){const t=document.createElement("li");0===e&&t.classList.add("menu-active"),t.innerHTML=n[e],r.appendChild(t)}const s=document.createElement("p");s.classList.add("user-block"),e.appendChild(s);const a=document.createElement("button");a.innerHTML="Register new player",a.classList.add("register-btn"),e.appendChild(a);const c=document.createElement("button");c.innerHTML="Start game",c.classList.add("start-game-btn"),e.appendChild(c)}static displayStartGame(e,t,r){document.querySelector(".start-game-btn").style.display="block",document.querySelector(".register-btn").style.display="none";const n=document.querySelector(".user-block");n.innerHTML=`\n    <p>User:</p>\n    <p class="firstName">${e}</p>\n    <p class="secondName"> ${t}</p>`,n.style.display="flex";const s=document.createElement("p");s.innerHTML=`\n    <p class="email">${r}</p>`,s.style.display="none",n.appendChild(s)}}},895:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(784);const s=n(r(973)),a=n(r(42));class c{constructor(){this.createUser=e=>{e.preventDefault();const t=document.querySelector("#first-name"),r=document.querySelector("#second-name"),n=document.querySelector("#email"),a=t.value.trim(),o=r.value.trim(),i=n.value.trim();s.default.displayStartGame(a,o,i);const l=document.querySelector(".register-form");if(!l)throw new Error("Registration form is not found!");l.style.display="none",c.clearForm()}}render(){const e=document.createElement("main");e.innerHTML='\n    <form action="" class="register-form">\n      <div class="register-form-wrapper">\n        <h4>Registration</h4>\n        <div class="form-field-wrapper">\n          <label for="first-name">First Name</label>\n          <input type="text" name="first-name" id="first-name" maxlength="30"\n            title="First name field can contain only letters (no numbers or special characters)">\n          <i class="fas fa-check-circle"></i>\n          <i class="fas fa-exclamation-circle"></i>\n          <p class="error-message">Error message</p>\n        </div>\n        <div class="form-field-wrapper">\n          <label for="second-name">Second Name</label>\n          <input type="text" name="second-name" id="second-name" maxlength="30"\n            title="Last name field can contain only letters (no numbers or special characters)">\n          <i class="fas fa-check-circle"></i>\n          <i class="fas fa-exclamation-circle"></i>\n          <p class="error-message">Error message</p>\n        </div>\n        <div class="form-field-wrapper">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" maxlength="30">\n          <i class="fas fa-check-circle"></i>\n          <i class="fas fa-exclamation-circle"></i>\n          <p class="error-message">Error message</p>\n        </div>\n        <div class="form-btn-wrapper">\n          <input type="submit" value="Add user" class="submit-btn" disabled>\n          <input type="reset" value="Cancel" class="cancel-btn">\n\n        </div>\n      </div>\n    </form>',document.body.appendChild(e),document.querySelector(".register-btn").addEventListener("click",c.displayForm);const t=document.querySelector("#first-name"),r=document.querySelector("#second-name"),n=document.querySelector("#email");t.addEventListener("keyup",(e=>c.checkFormInputs(e.target))),r.addEventListener("keyup",(e=>c.checkFormInputs(e.target))),n.addEventListener("keyup",(e=>c.checkEmail(e.target)));const s=document.querySelector(".register-form");if(!s)throw new Error("Registration form is not found!");s.addEventListener("submit",this.createUser);const a=document.querySelector(".cancel-btn");if(!a)throw new Error("Cancel button is not found!");a.addEventListener("click",c.clearForm)}static clearForm(){document.querySelectorAll(".form-field-wrapper").forEach((e=>{e.classList.contains("success")&&e.classList.remove("success"),e.classList.contains("error")&&e.classList.remove("error")}))}static displayForm(){a.default.clearAllForm();const e=document.querySelector(".register-form");if(!e)throw new Error("Registration form is not found!");e.style.display="flex"}static isFormComplete(){const e=document.querySelectorAll(".success"),t=document.querySelector(".submit-btn");if(!t)throw new Error("Submit button is not found!");3===e.length?t.disabled=!1:t.disabled=!0}static checkFormInputs(e){let t="";""===e.value.trim()?(t="This field can not be empty!",c.setErrorStatus(e,t)):!0===/[0-9]/g.test(e.value.trim())||!0===/[~!@#$%*()_—+=|:;"'`<>,.?/^]/g.test(e.value.trim())?(t="This field can't contain numbers oder ~!@#$%*()_—+=|:;\"'<>,.?/^&#x60;",c.setErrorStatus(e,t)):c.setSuccessStatus(e),c.isFormComplete()}static checkEmail(e){let t="";""===e.value.trim()?(t="This field can not be empty!",c.setErrorStatus(e,t)):!1===/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())?(t="Email is not valid!",c.setErrorStatus(e,t)):c.setSuccessStatus(e),c.isFormComplete()}static setErrorStatus(e,t){const r=e.parentElement;if(!r)throw new Error("Parent element is not found!");r.classList.contains("success")&&r.classList.remove("success"),r.classList.add("error"),r.children[4].innerHTML=t}static setSuccessStatus(e){const t=e.parentElement;if(!t)throw new Error("Parent element is not found!");t.classList.contains("error")&&t.classList.remove("error"),t.classList.add("success")}}t.default=c},42:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{static clearAllForm(){document.querySelector(".about-game-section")&&(document.querySelector(".about-game-section").style.display="none"),document.querySelector(".register-form")&&(document.querySelector(".register-form").style.display="none"),document.querySelector(".settings-wrapper")&&(document.querySelector(".settings-wrapper").style.display="none"),document.querySelector(".best-score-section")&&(document.querySelector(".best-score-section").style.display="none"),document.querySelector(".cards")&&(document.querySelector(".cards").style.display="none"),document.querySelector(".gameParamaters")&&(document.querySelector(".gameParamaters").style.display="none"),document.querySelector(".congr-wrapper")&&(document.querySelector(".congr-wrapper").style.display="none")}}},836:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r(42));r(571);class a{static render(){const e=document.querySelector("main");if(!e)throw new Error("Main element is not found!");const t=document.createElement("form");t.classList.add("settings-wrapper"),t.innerHTML='\n    <section>\n      <label for="cardsType">Game cards</label>\n      <select name="cardsType" id="cardsType">\n        <option value="animal">Animal</option>\n        <option value="fish">Fish</option>\n        <option value="forest">Forest</option>\n      </select>\n    </section>\n    <section>\n      <label for="cardsQuantity">Difficulty</label>\n      <select name="cardsQuantity" id="cardsQuantity">\n        <option value="4">4x4</option>\n        <option value="6">6x6</option>\n        <option value="8">8x8</option>\n      </select>\n    </section>\n    ',e.appendChild(t);const r=document.querySelector(".menu");if(!r)throw new Error("Menu element is not found!");r.children[1].addEventListener("click",a.showSettingsForm)}static showSettingsForm(){s.default.clearAllForm();const e=document.querySelector(".settings-wrapper");if(!e)throw new Error("Settings form is not found!");e.style.display="flex"}static getCardsQuantity(){const e=document.querySelector("#cardsQuantity");if(!e)throw new Error("Element is not found!");return+e.value}static getCardsType(){return document.querySelector("#cardsType").value}}t.default=a},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(373);const s=n(r(973)),a=n(r(895)),c=n(r(255)),o=n(r(836)),i=n(r(755)),l=r(964);(class{static render(){s.default.render(),(new a.default).render(),l.AboutGame.render(),o.default.render(),(new c.default).handleStartBtn(),i.default.render([])}}).render()}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(607)})();