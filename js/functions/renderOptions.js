import createOptionsContainer from '../views/createOptionsContainer.js';
import getOptions from './getOptions.js';

export default function renderOptions(event) {
  const element = event.target;
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  const options = getOptions(x, y);
  createOptionsContainer(element, options);
}
