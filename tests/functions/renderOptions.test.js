import {
  expect, describe, it, jest, beforeEach,
} from '@jest/globals';
import functions from '../../js/functions';
import views from '../../js/views';
import page from '../../jsdom';
import boards from '../mock/boards.js';

const { renderOptions } = functions;
const { board } = boards;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao renderOptions', () => {
  const content = document.getElementById('content');
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  content.appendChild(optionsContainer);
  const target = document.createElement('div');
  target.id = 'x=4 y=4';
  beforeEach(() => jest.clearAllMocks());
  it('verifica se ao ser chamada o container de opcoes anteriores e retirado', () => {
    expect(document.querySelector('.options-container')).not.toBeNull();
    renderOptions({ target }, board);
    expect(document.querySelector('.options-container')).toBeNull();
  });

  it('verifica se a funcao getOptions e chamada com os paremetros corretos', async () => {
    const spyOptions = jest.spyOn(views, 'createOptionsContainer').mockImplementationOnce(() => {});
    const spyGetOptions = jest.spyOn(functions, 'getOptions').mockImplementationOnce(() => {});
    await renderOptions({ target }, board);
    await spyGetOptions(4, 4, board);
    await spyOptions();
    expect(spyGetOptions).toHaveBeenCalledWith(4, 4, board);
    expect(spyOptions).toHaveBeenCalledWith();
  });
});
