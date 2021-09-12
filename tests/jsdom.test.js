import { expect, describe, it } from '@jest/globals';
import page from '../jsdom';

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica jsdom no node', () => {
  it('verifica rederizacao e funcoes do jsdom', () => {
    const content = document.getElementById('content');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'texto de teste';
    expect(content).toBeDefined();
    expect(content.tagName).toBe('DIV');

    content.appendChild(paragraph);

    expect(content.firstChild).toBeDefined();
    expect(content.firstChild.tagName).toBe('P');
    expect(content.firstChild.innerHTML).toBe('texto de teste');
  });
});
