import createOptionsContainer from '../views/createOptionsContainer.js';
import getOptions from './getOptions.js';

export default function renderOptions(event, cardMatrix) {
  const containerOld = document.querySelector('.options-container');
  if (containerOld) containerOld.parentElement.removeChild(containerOld);
  const element = event.target;
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  const options = getOptions(x, y, cardMatrix);
  createOptionsContainer(element, options, cardMatrix);
}
