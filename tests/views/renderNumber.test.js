import {
  expect, describe, it,
} from '@jest/globals';
import views from '../../js/views';
import page from '../../jsdom';
import boards from '../mock/boards';

const { renderNumber } = views;
const { board } = boards;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('Verifica a funcao renderNumber', () => {
  const div = document.createElement('div');
  div.id = 'x=4 y=4';
  const target = document.createElement('span');
  target.innerHTML = 5;
  it('verifica se ao ser chamada a funcao ', () => {
    expect(div.innerHTML).toBe('');
    expect(board[4][4]).toBe(0);
    renderNumber({ target }, div, board);
    expect(div.innerHTML).toBe('5');
    expect(board[4][4]).toBe(5);
  });
});
