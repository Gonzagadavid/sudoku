import createHtmlElement from '../functions/createHtmlElement.js';
import fetchBoard from '../functions/fetchBoard.js';
import gameState from '../main.js';

function restart(container) {
  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;
  container.remove();
  fetchBoard(url, true);
}

export default function finishedContainer() {
  const content = document.getElementById('content');
  const container = createHtmlElement('div', { className: 'finished-container' });
  container.appendChild(createHtmlElement('h2', { innerHTML: 'Finished' }));
  const text = `Parabéns! Você concluiu no level ${gameState.difficulty.toUpperCase()}.`;
  container.appendChild(createHtmlElement('p', { innerHTML: text }));
  const btnAttributes = { innerHTML: 'Jogar novamente', className: 'btn-finished' };
  const btn = createHtmlElement('button', btnAttributes);
  btn.addEventListener('click', () => restart(container));
  container.appendChild(btn);
  content.appendChild(container);
}
