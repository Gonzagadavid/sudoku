import createHtmlElement from '../functions/createHtmlElement.js';
import nextLevel from '../functions/nextLevel.js';
import gameState from '../index.js';

function renderDifficult(event) {
  gameState.difficulty = event.target.value;
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
  const btnContainer = document.getElementById('btn-container');
  const arrayDifficult = ['easy', 'medium', 'hard', 'random'];
  arrayDifficult.forEach((dif) => addBtn(btnContainer, dif));
}
