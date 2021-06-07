import gameState from '../index.js';
import createCardGame from '../views/createCardGame.js';

export default function nextLevel() {
  gameState.level += 1;
  const content = document.getElementById('content');
  content.innerHTML = '';
  const card = createCardGame();
  content.appendChild(card);
}
