import createHtmlElement from '../functions/createHtmlElement.js';
import gameState from '../main.js';
import fetchBoard from '../functions/fetchBoard.js';

function nextLevel() {
  const content = document.getElementById('content');
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  fetchBoard(url, true, content);
}

function renderDifficult(event) {
  gameState.difficulty = event.target.value.toLowerCase();
  nextLevel();
}

function addBtn(parentElement, value) {
  const btnAttributes = {
    className: 'btn-difficult',
    value,
    innerHTML: value,
  };
  const btn = createHtmlElement('button', btnAttributes);
  btn.addEventListener('click', (e) => renderDifficult(e));
  parentElement.appendChild(btn);
}

export default function createBtnContainer(content) {
  if (!content) return;
  const btnContainer = createHtmlElement('div', { className: 'btn-container' });
  const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];
  arrayDifficult.forEach((dif) => addBtn(btnContainer, dif));
  content.appendChild(btnContainer);
}
