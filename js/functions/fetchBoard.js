import createCardGame from '../views/createCardGame.js';
import createClearBtn from '../views/createClearBtn.js';

export default async function fetchBoard(url) {
  const content = document.getElementById('content');
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('A requisão do jogo falhou');
    const objBoard = await response.json();
    const { board } = objBoard;
    const card = createCardGame(board);
    content.appendChild(card);
    content.appendChild(createClearBtn(board));
  } catch (e) {
    console.log(e.message);
  }
}
