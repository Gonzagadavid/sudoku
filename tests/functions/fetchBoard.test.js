import {
  expect, describe,
  it, jest, afterEach,
} from '@jest/globals';
import functions from '../../js/functions';
import page from '../../jsdom';
import fetchMock from '../mock/fetchMock.js';

const { fetchBoard } = functions;

const url = 'https://sugoku.herokuapp.com/board?difficulty=easy';
const url2 = 'https://sugoku.herokuapp.com/board?difficulty=medium';

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

global.fetch = jest.fn(fetchMock);

describe('verifica a funcao fecthBoard', () => {
  const content = document.getElementById('content');
  const button = document.createElement('button');
  button.value = 'EASY';
  button.innerHTML = 'EASY';
  content.appendChild(button);
  afterEach(jest.clearAllMocks);

  it('veriifica se ao falhar a requisição um erro é lançado', () => {
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(document.querySelector('.card-container')).toBeNull();
    expect(async () => {
      await fetchBoard('urlInválida', false, content);
    }).rejects.toThrowError(/A requisão do jogo falhou/);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(document.querySelector('.card-container')).toBeNull();
  });

  it('veriifica se o fetch é chamado quando passado os paramentros corretos', async () => {
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(document.querySelector('.card-container')).toBeNull();
    await fetchBoard(url, false, content);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(document.querySelector('.card-container')).toBeDefined();
  });

  it('veriifica se ao passar o segundo parametro como true o card antigo é limpo', async () => {
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(document.querySelector('.card-container')).toBeDefined();
    await fetchBoard(url2, true, content);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(document.querySelector('.card-container')).toBeDefined();
    expect(document.querySelectorAll('.card-container')).toHaveLength(1);
  });

  it('verifica se ao ser chamada sem paramentro a requisicao não é feita', async () => {
    expect(global.fetch).toHaveBeenCalledTimes(0);
    await fetchBoard(url, false);
    expect(global.fetch).not.toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(() => {
      fetchBoard('urlInválida', false);
    }).not.toThrowError(/A requisão do jogo falhou/);
  });
});
