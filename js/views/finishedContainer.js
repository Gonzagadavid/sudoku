import createHtmlElement from '../functions/createHtmlElement.js';
import fetchBoard from '../functions/fetchBoard.js';
import gameState from '../index.js';

export default function finishedContainer() {
  const container = createHtmlElement('div', { className: 'finished-contaienr' });
  container.appendChild(createHtmlElement('h2', { innerHTML: 'Finished' }));
  const text = `Parabéns! Você concluiu no level ${gameState.difficulty}.`;
  container.appendChild(createHtmlElement('p', { innerHTML: text }));
  const btnAttributes = { innerHTML: 'Joga novamente', className: 'btn-finished' };
  const btn = createHtmlElement('button', btnAttributes);
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  btn.addEventListener('click', () => fetchBoard(url, true));
}
