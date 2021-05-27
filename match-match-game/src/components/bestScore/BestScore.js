import './BestScore.scss';
export default class BestScore {
  render() {
    const main = document.querySelector('main');
    const scoreSection = document.createElement('section');
    scoreSection.classList.add('best-score-section');
    scoreSection.innerHTML = `
    <h3>Best players:</h3>
    <ul class="score-table">
      <li>
        <div class="user-data">
          <div>
            <p class="user-first-name">Vasiliy</p>
            <p class="user-second-name">Pupkin</p>
          </div>
          <p class="user-email">pupkin@gg.com</p>
        </div>
        <div class="score-wrapper">
          <p>Score</p>
          <p class="user-score">200</p>
        </div>
      </li>
      <li>
        <div class="user-data">
          <div>
            <p class="user-first-name">Vasiliy</p>
            <p class="user-second-name">Pupkin</p>
          </div>
          <p class="user-email">pupkin@gg.com</p>
        </div>
        <div class="score-wrapper">
          <p>Score</p>
          <p class="user-score">200</p>
        </div>
      </li>
      <li>
        <div class="user-data">
          <div>
            <p class="user-first-name">Vasiliy</p>
            <p class="user-second-name">Pupkin</p>
          </div>
          <p class="user-email">pupkin@gg.com</p>
        </div>
        <div class="score-wrapper">
          <p>Score</p>
          <p class="user-score">200</p>
        </div>
      </li>
      <li>
        <div class="user-data">
          <div>
            <p class="user-first-name">Vasiliy</p>
            <p class="user-second-name">Pupkin</p>
          </div>
          <p class="user-email">pupkin@gg.com</p>
        </div>
        <div class="score-wrapper">
          <p>Score</p>
          <p class="user-score">200</p>
        </div>
      </li>
      <li>
        <div class="user-data">
          <div>
            <p class="user-first-name">Vasiliy</p>
            <p class="user-second-name">Pupkin</p>
          </div>
          <p class="user-email">pupkin@gg.com</p>
        </div>
        <div class="score-wrapper">
          <p>Score</p>
          <p class="user-score">200</p>
        </div>
      </li>
    </ul>
    `;
    main.appendChild(scoreSection);

    const menu = document.querySelector('.menu');
    const bestScore = menu.children[2];

    bestScore.addEventListener('click', this.showBestScoreSection);
  }
  showBestScoreSection() {
    const scoreSection = document.querySelector('.best-score-section');
    scoreSection.style.display = 'flex';
  }
}
