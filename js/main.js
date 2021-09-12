import fetchBoard from './functions/fetchBoard.js';
import createBtnContainer from './views/createBtnContainer.js';
import createContactContainer from './views/createContactContainer.js';
import insertTitle from './views/insertTitle.js';

const gameState = { difficulty: 'easy' };
export default gameState;

const content = document.getElementById('content');
createContactContainer(content);

insertTitle(content);

createBtnContainer(content);

const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
fetchBoard(url, false, content);
