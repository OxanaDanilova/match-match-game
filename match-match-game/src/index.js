class App {
    constructor() {}
    createCards(number) {
        const cards = document.querySelector('.cards');
        for (let i=0; i<number; i++) {
        let element = document.createElement('li');
        element.classList.add('card-wrapper');
        element.innerHTML = `
        <div class="card">
        <div class="front-side">Front</div>
        <div class="back-side">Back</div>
        </div>`;
        cards.appendChild(element);
        }
    }
}

const app = new App();
app.createCards(5);