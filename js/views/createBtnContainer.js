import createHtmlElement from '../functions/createHtmlElement.js';
import gameState from '../index.js';
import fetchBoard from '../functions/fetchBoard.js';

function nextLevel() {
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  fetchBoard(url, true);
}

function renderDifficult(event) {
  gameState.difficulty = event.target.value.toLowerCase();
  nextLevel();
}

function addBtn(parentElement, value) {
  const btnAttributes = {
    className: 'btn-difficult',
    value,
    onclick: (e) => renderDifficult(e),
    innerHTML: value,
  };
  const btn = createHtmlElement('button', btnAttributes);
  parentElement.appendChild(btn);
}

export default function createBtnContainer() {
  const content = document.getElementById('content');
  const btnContainer = createHtmlElement('div', { className: 'btn-container' });
  const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];
  arrayDifficult.forEach((dif) => addBtn(btnContainer, dif));
  content.appendChild(btnContainer);
}
