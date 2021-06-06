import createCardGame from './functions/createCardGame.js';

const content = document.getElementById('content');
const card = createCardGame('level1');
content.appendChild(card);
