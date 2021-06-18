import createHtmlElement from '../functions/createHtmlElement.js';

export default function finishedContainer() {
  const container = createHtmlElement('div', { className: 'finished-contaienr' });
  container.appendChild(createHtmlElement('h2', { innerHTML: 'Finished' }));
}
