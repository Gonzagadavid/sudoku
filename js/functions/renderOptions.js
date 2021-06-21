import createOptionsContainer from '../views/createOptionsContainer.js';
import getOptions from './getOptions.js';

export default function renderOptions(event, board) {
  const containerOld = document.querySelector('.options-container');
  if (containerOld) containerOld.parentElement.removeChild(containerOld);
  const element = event.target;
  const x = +element.id.replace(/(x=)|y=\d/g, '');
  const y = +element.id.replace(/(y=)|x=\d/g, '');
  const options = getOptions(x, y, board);
  createOptionsContainer(element, options, board);
}
