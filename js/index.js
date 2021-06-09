import createHtmlElement from './functions/createHtmlElement.js';
import createBtnContainer from './views/createBtnContainer.js';
import createCardGame from './views/createCardGame.js';

const gameState = { difficulty: 'easy' };
export default gameState;
const content = document.getElementById('content');
const title = createHtmlElement('h1', { innerHTML: 'Sudoku' });
content.appendChild(title);
createBtnContainer();
const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
fetch(url)
  .then((resp) => resp.json())
  .then((resp) => {
    const card = createCardGame(resp);
    content.appendChild(card);
  });
