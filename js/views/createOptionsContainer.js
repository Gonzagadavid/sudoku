import createHtmlElement from '../functions/createHtmlElement.js';
import renderNumber from './renderNumber.js';

export default function createOptionsContainer(element, options) {
  const optionsContainer = createHtmlElement('div', { className: 'options-container' });
  options.forEach((number) => {
    const spanAttributes = {
      className: 'number-option',
      innerHTML: number,
    };
    const span = createHtmlElement('span', spanAttributes);
    span.addEventListener('click', (event) => renderNumber(event, element));
    optionsContainer.appendChild(span);
  });
  element.appendChild(optionsContainer);
}
