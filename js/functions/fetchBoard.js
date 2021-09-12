import views from '../views/index.js';
// import btnSelect from './btnSelect.js';
import functions from './index.js';

const { createCardGame, createClearBtn } = views;
const { btnSelect } = functions;

function clearCard() {
  const content = document.getElementById('content');
  content.lastChild.remove();
  content.lastChild.remove();
}

export default async function fetchBoard(url, clear, content) {
  if (!content) return;
  // const content = document.getElementById('content');
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
