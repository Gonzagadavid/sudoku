import createHtmlElement from '../functions/createHtmlElement.js';
import clearNumber from './clearNumber.js';

function clearBoard(event, board) {
  const tryNumbers = document.querySelectorAll('.try');
  tryNumbers.forEach((element) => clearNumber(event, element, board));
}

export default function createClearBtn(board) {
  const clearContainer = createHtmlElement('div', { className: 'clear-container' });
  const clearBtnAttributes = {
    className: 'clear-btn',
    innerHTML: 'Limpar',
    onclick: (event) => clearBoard(event, board),
  };
  const clearBtn = createHtmlElement('button', clearBtnAttributes);
  clearContainer.appendChild(clearBtn);
  return clearContainer;
}
