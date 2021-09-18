import {
  expect, describe, it,
} from '@jest/globals';
import page from '../../jsdom';
import views from '../../js/views/index';
import boards from '../mock/boards';

const { createOptionsContainer } = views;
const { board } = boards;
const options = [2, 3, 4];

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao createOptionsContainer', () => {
  const content = document.getElementById('content');
  const element = document.createElement('div');
  content.appendChild(element);

  it('verifica a renderizacao apos a chamada da funcao', () => {
    const optionsText = [...options.map((op) => `${op}`), 'Limpar'];
    createOptionsContainer(element, options, board);
    const numbers = [...document.querySelectorAll('span')].map((n) => n.innerHTML);
    expect(numbers).toEqual(optionsText);
  });
});
