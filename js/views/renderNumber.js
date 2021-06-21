import checkCompleted from '../functions/checkCompleted.js';
import finishedContainer from './finishedContainer.js';

export default function renderNumber(event, element, board) {
  const x = +element.id.replace(/(x=)|y=\d/g, '');
  const y = +element.id.replace(/(y=)|x=\d/g, '');
  const value = +event.target.innerHTML;
  board[x][y] = value;
  element.innerHTML = value;
  if (checkCompleted(board)) finishedContainer();
}
