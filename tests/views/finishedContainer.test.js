import {
  expect, describe, it,
} from '@jest/globals';
import views from '../../js/views';
import page from '../../jsdom';
import gameState from '../../js/main';

const { finishedContainer } = views;
const expectText = `Parabéns! Você concluiu no level ${gameState.difficulty.toUpperCase()}.`;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao finishedContainer', () => {
  it('verifica o cuncionamento da funcao', () => {
    finishedContainer();
    expect(document.querySelector('h2').innerHTML).toBe('Finished');
    expect(document.querySelector('p').innerHTML).toBe(expectText);
    expect(document.querySelector('button').innerHTML).toBe('Jogar novamente');
  });

  it('verifica o evento do botão', () => {
    const event = new MouseEvent('click');
    const btn = document.querySelector('.btn-finished');
    btn.dispatchEvent(event);
    expect(document.querySelector('finished-container')).toBeNull();
  });
});
