import {
  expect, describe, it,
} from '@jest/globals';
import page from '../../jsdom';
import views from '../../js/views/index';
import boards from '../mock/boards';

const { createCardGame } = views;
const { board } = boards;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao createCardGame', () => {
  const content = document.getElementById('content');
  it('verifica se retorna um elemento correto', () => {
    const cardGame = createCardGame(board);
    expect(cardGame.className).toBe('card-container');
    content.appendChild(cardGame);
    expect(document.querySelectorAll('.row-card')).toHaveLength(9);
    expect(document.querySelectorAll('.number')).toHaveLength(81);
  });

  it('verifica se os numeros do card estao posicionado corretamente', () => {
    board.forEach((line, x) => {
      line.forEach((item, y) => {
        const value = item ? item.toString() : '';
        const number = document.getElementById(`x=${x} y=${y}`);
        expect(number.innerHTML).toBe(value);
      });
    });
  });
});
