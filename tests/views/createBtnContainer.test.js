import {
  expect, describe, it, jest,
} from '@jest/globals';
import page from '../../jsdom';
import views from '../../js/views/index';
import gameState from '../../js/main.js';
import fetchMock from '../mock/fetchMock';

const { createBtnContainer } = views;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];

global.fetch = jest.fn(fetchMock);

describe('verifica a funcao createBtnContainer', () => {
  const content = document.getElementById('content');

  it('verifica se ao chamar a funcao sem parametro nao ocorre erro', () => {
    createBtnContainer();
    expect(document.querySelector('.btn-container')).toBeNull();
  });

  it('verifica se ao chamar a funcao os botoes de nivel sao criados', () => {
    createBtnContainer(content);
    const btnContainer = document.querySelector('.btn-container');
    const difficultBtns = document.querySelectorAll('.btn-difficult');
    expect(btnContainer.tagName).toBe('DIV');
    expect(difficultBtns).toHaveLength(4);
    expect([...difficultBtns].map((btn) => btn.innerHTML)).toEqual(arrayDifficult);
    difficultBtns.forEach((btn) => {
      expect(btn.parentElement.className).toBe('btn-container');
    });
  });

  it('verifica o funcionamento dos botoes criados', () => {
    const mediumBtn = document.querySelectorAll('.btn-difficult')[1];
    const event = new MouseEvent('click');
    expect(gameState.difficulty).toBe('easy');
    expect(mediumBtn.innerHTML).toBe('MEDIUM');
    mediumBtn.dispatchEvent(event);
    expect(gameState.difficulty).toBe('medium');
  });

  it('verifica se ocorre um erro ao nao passar elemento para a funcao', () => {
    expect(() => createBtnContainer()).not.toThrow();
  });
});
