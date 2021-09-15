import { expect, describe, it } from '@jest/globals';
import page from '../../jsdom';
import views from '../../js/views/index';
import boards from '../mock/boards';

const { clearNumber } = views;
const { board } = boards;
const boardCopy = [...board];

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('Verifica a funcao clearNumber', () => {
  const content = document.getElementById('content');
  const element = document.createElement('div');
  element.id = 'x=1 y=7';
  element.innerHTML = '3';
  content.appendChild(element);
  boardCopy[1][7] = 3;

  it('verifica se ao passar o paramtros a funcao executa a tarefa corretamente', () => {
    expect(content.firstChild.id).toBe('x=1 y=7');
    expect(content.firstChild.innerHTML).toBe('3');
    expect(board[1][7]).toBe(3);
    clearNumber({}, element, boardCopy);
    expect(content.firstChild.id).toBe('x=1 y=7');
    expect(content.firstChild.innerHTML).toBe('');
    expect(board[1][7]).toBe(0);
  });
});
