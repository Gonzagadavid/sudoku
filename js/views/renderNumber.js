import checkCompleted from '../functions/checkCompleted.js';
import nextLevel from '../functions/nextLevel.js';

export default function renderNumber(event, element, board) {
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  const value = +event.target.innerHTML;
  board[x][y] = value;
  element.innerHTML = value;
  if (checkCompleted(board)) nextLevel();
}
