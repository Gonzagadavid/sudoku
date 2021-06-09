import gameState from '../index.js';
import createBtnContainer from '../views/createBtnContainer.js';
import createCardGame from '../views/createCardGame.js';

export default function nextLevel() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  createBtnContainer();
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      const card = createCardGame(resp);
      content.appendChild(card);
    });
}
