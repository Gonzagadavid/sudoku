import {
  expect, describe, it,
} from '@jest/globals';
import page from '../../jsdom';
import views from '../../js/views/index';

const { createContactContainer } = views;
const link = 'https://github.com/Gonzagadavid/sudoku';

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao createContactContainer', () => {
  const content = document.getElementById('content');

  it('verifica se a funcao nao falha ao ser chamada sem parametro', () => {
    expect(() => createContactContainer()).not.toThrow();
    createContactContainer(true);
    expect(document.querySelector('.contact-container')).toBeNull();
    expect(document.querySelector('a')).toBeNull();
  });

  it('verifica se os elementos são renderizados corretamente', () => {
    createContactContainer(content);
    const container = content.firstElementChild;// document.querySelector('.contact-container');
    const gitHub = document.querySelector('a');
    expect(container.tagName).toBe('DIV');
    expect(gitHub.href).toBe(link);
    expect(gitHub.innerHTML).toBe('<i class="fab fa-github"></i>');
    expect(document.querySelector('.contact-text').innerHTML).toBe('by David Gonzaga');
  });
});
