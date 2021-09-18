import btnSelect from './btnSelect.js';
import createCardGame from '../views/createCardGame.js';
import createClearBtn from '../views/createClearBtn.js';

function clearCard() {
  const content = document.getElementById('content');
  if (content.lastChild) content.lastChild.remove();
  if (content.lastChild) content.lastChild.remove();
}

export default async function fetchBoard(url, clear, content) {
  if (!content) return;
  const response = await fetch(url);
  if (!response.ok) throw new Error('A requisão do jogo falhou');
  const objBoard = await response.json();
  const { board } = objBoard;
  if (clear) clearCard();
  const card = createCardGame(board);
  content.appendChild(card);
  content.appendChild(createClearBtn(board));
  btnSelect();
}
