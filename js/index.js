import createCardGame from './views/createCardGame.js';

const gameState = { level: 1 };
export default gameState;

const content = document.getElementById('content');
const card = createCardGame();
content.appendChild(card);
