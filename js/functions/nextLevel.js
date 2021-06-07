import gameState from '../index.js';
import createCardGame from '../views/createCardGame.js';

export default function nextLevel() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      const card = createCardGame(resp);
      content.appendChild(card);
    });
}
