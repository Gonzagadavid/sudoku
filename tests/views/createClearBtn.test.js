import {
  expect, describe, it, jest,
} from '@jest/globals';
import page from '../../jsdom';
import views from '../../js/views/index';
import boards from '../mock/boards';
import fetchMock from '../mock/fetchMock';
import functions from '../../js/functions';

const { createClearBtn } = views;
const { fetchBoard } = functions;
const { board } = boards;
const boardCopy = [...board];
const url = 'https://sugoku.onrender.com/board?difficulty=easy';

global.window.document.body.innerHTML = page.window.document.body.innerHTML;
global.fetch = jest.fn(fetchMock);
describe('verifica a funcao createClearBtn', () => {
  const content = document.getElementById('content');
  const btnEasy = document.createElement('button');
  btnEasy.innerHTML = 'EASY';
  btnEasy.value = 'EASY';
  content.appendChild(btnEasy);
  const clearContainer = createClearBtn(boardCopy);

  it('verifica se a funcao retorna corretamente o elemento', () => {
    expect(clearContainer.tagName).toBe('DIV');
    expect(clearContainer.className).toBe('clear-container');
    expect(clearContainer.firstChild.tagName).toBe('BUTTON');
    expect(clearContainer.firstChild.className).toBe('clear-btn');
    expect(clearContainer.firstChild.innerHTML).toBe('CLEAR BOARD');
  });

  it('verifica a funcionalidade do botão', async () => {
    await fetchBoard(url, false, content);
    content.appendChild(clearContainer);
    const clearBtn = document.querySelector('.clear-btn');
    const event = new MouseEvent('click');
    const tryOne = document.getElementById('x=1 y=1');
    const tryTwo = document.getElementById('x=2 y=4');
    tryOne.innerHTML = '2';
    tryTwo.innerHTML = '3';
    boardCopy[1][1] = 2;
    boardCopy[2][4] = 3;

    expect(tryOne.innerHTML).toBe('2');
    expect(tryTwo.innerHTML).toBe('3');
    expect(boardCopy[1][1]).toBe(2);
    expect(boardCopy[2][4]).toBe(3);

    clearBtn.dispatchEvent(event);

    expect(tryOne.innerHTML).toBe('');
    expect(tryTwo.innerHTML).toBe('');
    expect(boardCopy[1][1]).toBe(0);
    expect(boardCopy[2][4]).toBe(0);
  });
});
