import {
  expect, describe, it, afterEach,
} from '@jest/globals';
import views from '../../js/views';
import page from '../../jsdom';

const { insertTitle } = views;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao insertTitle', () => {
  const content = document.getElementById('content');
  afterEach(() => { content.innerHTML = ''; });
  it('verifica se o titulo é renderizado corretamente', () => {
    insertTitle(content);
    const title = document.querySelector('.title');
    expect(title).not.toBeNull();
    expect(title.innerHTML).toBe('Sudoku');
    expect(title.tagName).toBe('H1');
  });

  it('verifica se o titulo é renderizado corretamente', () => {
    insertTitle();
    const title = document.querySelector('.title');
    expect(title).toBeNull();
  });
});
