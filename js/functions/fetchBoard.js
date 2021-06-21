import createCardGame from '../views/createCardGame.js';
import createClearBtn from '../views/createClearBtn.js';
import btnSelect from './btnSelect.js';

function clearCard() {
  const content = document.getElementById('content');
  content.lastChild.remove();
  content.lastChild.remove();
}

export default async function fetchBoard(url, clear) {
  const content = document.getElementById('content');
  const response = await fetch(url);
  if (!response.ok) throw new Error('A requisão do jogo falhou');
  const objBoard = await response.json();
  const { board } = objBoard;
  console.log(board);
  if (clear) clearCard();
  const card = createCardGame(board);
  content.appendChild(card);
  content.appendChild(createClearBtn(board));
  btnSelect();
}
