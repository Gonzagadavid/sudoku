import createHtmlElement from './functions/createHtmlElement.js';
import fetchBoard from './functions/fetchBoard.js';
import createBtnContainer from './views/createBtnContainer.js';

const gameState = { difficulty: 'easy' };
export default gameState;

const content = document.getElementById('content');
const title = createHtmlElement('h1', { innerHTML: 'Sudoku', className: 'title' });
content.appendChild(title);

createBtnContainer();

const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
console.log(url);
fetchBoard(url);
