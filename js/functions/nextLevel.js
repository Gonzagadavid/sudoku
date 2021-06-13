import gameState from '../index.js';
import createCardGame from '../views/createCardGame.js';
import createClearBtn from '../views/createClearBtn.js';

export default function nextLevel() {
  const content = document.getElementById('content');
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      const { board } = resp;
      const card = createCardGame(board);
      content.lastChild.remove();
      content.lastChild.remove();
      content.appendChild(card);
      content.appendChild(createClearBtn(board));
    });
}
