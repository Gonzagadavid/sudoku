import {
  expect, describe, it, jest,
} from '@jest/globals';
import page from '../jsdom';
import fetchMock from './mock/fetchMock.js';
import { gameInit } from '../js/main';
import boards from './mock/boards';

const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];
const { board, boardSolved } = boards;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

global.fetch = jest.fn(fetchMock);

describe('verifica arenderizacao e o funcionamento da aplicacao', () => {
  const event = new MouseEvent('click');

  gameInit();
  it('verifica a renderização inicial da tela', () => {
    expect(document.querySelector('h1').innerHTML).toBe('Sudoku');

    const diffBtns = document.querySelectorAll('.btn-difficult');
    expect([...diffBtns].map((btn) => btn.innerHTML)).toEqual(arrayDifficult);
    expect(document.querySelector('.selected').innerHTML).toBe('EASY');

    board.forEach((line, x) => line.forEach((cel, y) => {
      const value = cel ? cel.toString() : '';
      expect(document.getElementById(`x=${x} y=${y}`).innerHTML).toBe(value);
    }));

    expect(document.querySelector('.clear-btn').innerHTML).toBe('CLEAR BOARD');
    expect(document.querySelector('.contact-text').innerHTML).toBe('by David Gonzaga');
  });

  it('verifica se ao preencher corretamente o jogo a mensagem de fim é renderizada'
  + 'e apertando jogar novamente uma nova tabela é exibida', () => {
    const trys = document.querySelectorAll('.try');
    trys.forEach((element) => {
      expect(element.innerHTML).toBe('');
      const x = +element.id.replace(/(x=)|y=\d/g, '');
      const y = +element.id.replace(/(y=)|x=\d/g, '');
      const value = (boardSolved[x][y]).toString();
      element.dispatchEvent(event);
      const options = document.querySelectorAll('span');
      options.forEach(async (option) => {
        if (option.innerHTML === value) option.dispatchEvent(event);
      });
    });
    boardSolved.forEach((line, x) => line.forEach((cel, y) => {
      const value = cel.toString();
      expect(document.getElementById(`x=${x} y=${y}`).innerHTML).toBe(value);
    }));

    expect(document.querySelector('.finished-container')).not.toBeNull();
    expect(document.querySelector('h2').innerHTML).toBe('Finished');
  });
});
