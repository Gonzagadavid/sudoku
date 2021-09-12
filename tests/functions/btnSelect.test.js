import { expect, describe, it } from '@jest/globals';
import functions from '../../js/functions';
import page from '../../jsdom';
import gameState from '../../js/main.js';

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

const { btnSelect } = functions;

const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];

describe('verifica a funcao btnSelect', () => {
  const content = document.getElementById('content');
  arrayDifficult.forEach((diff) => {
    const btn = document.createElement('button');
    btn.className = `test-${diff.toLowerCase()}`;
    btn.innerHTML = diff;
    btn.value = diff;
    content.appendChild(btn);
  });
  const easyBtn = document.querySelector('.test-easy');
  const mediumBtn = document.querySelector('.test-medium');
  const hardBtn = document.querySelector('.test-hard');
  const randomBtn = document.querySelector('.test-random');

  it('verifica se ao chamar a funcao a classe select é removida'
  + 'e passada para o botao selecionado', () => {
    randomBtn.classList.add('selected');
    expect(randomBtn.className).toMatch(/selected/);
    expect(easyBtn.className).not.toMatch(/selected/);
    expect(gameState.difficulty).toBe('easy');
    btnSelect();
    expect(randomBtn.className).not.toMatch(/selected/);
    expect(easyBtn.className).toMatch(/selected/);
    gameState.difficulty = 'medium';
    btnSelect();
    expect(easyBtn.className).not.toMatch(/selected/);
    expect(mediumBtn.className).toMatch(/selected/);
    gameState.difficulty = 'hard';
    btnSelect();
    expect(mediumBtn.className).not.toMatch(/selected/);
    expect(hardBtn.className).toMatch(/selected/);
    gameState.difficulty = 'random';
    btnSelect();
    expect(hardBtn.className).not.toMatch(/selected/);
    expect(randomBtn.className).toMatch(/selected/);
  });
});
