import createHtmlElement from '../functions/createHtmlElement.js';

export default function createContactContainer() {
  const container = createHtmlElement('div', { className: 'contact-container' });
  const linkAttributes = {
    innerHTML: '<i class="fab fa-github"></i>',
    href: 'https://github.com/Gonzagadavid/sudoku',
  };
  const link = createHtmlElement('a', linkAttributes);
  container.appendChild(link);
  const textAtribttues = {
    className: 'contact-text',
    innerHTML: 'by David Gonzaga',
  };
  const text = createHtmlElement('p', textAtribttues);
  container.appendChild(text);
  return container;
}
