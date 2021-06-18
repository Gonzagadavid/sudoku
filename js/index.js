import createHtmlElement from './functions/createHtmlElement.js';
import createBtnContainer from './views/createBtnContainer.js';
import createCardGame from './views/createCardGame.js';
import createClearBtn from './views/createClearBtn.js';

const gameState = { difficulty: 'easy' };
export default gameState;

const content = document.getElementById('content');
const title = createHtmlElement('h1', { innerHTML: 'Sudoku', className: 'title' });
content.appendChild(title);

createBtnContainer();

const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
fetch(url)
  .then((resp) => resp.json())
  .then((resp) => {
    const { board } = resp;
    const card = createCardGame(board);
    content.appendChild(card);
    content.appendChild(createClearBtn(board));
  });
