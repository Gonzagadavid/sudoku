import createHtmlElement from '../functions/createHtmlElement.js';

export default function insertTitle(content) {
  if (!content) return;
  const title = createHtmlElement('h1', { innerHTML: 'Sudoku', className: 'title' });
  content.appendChild(title);
}
