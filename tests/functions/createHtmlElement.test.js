import { expect, describe, it } from '@jest/globals';
import functions from '../../js/functions';
import page from '../../jsdom';

const { createHtmlElement } = functions;

const attributes = {
  className: 'class-test',
  id: 'id-test',
  innerHTML: 'texto de teste',
};

global.window.document.body.innerHTML = page.window.document.body.innerHTML;

describe('verifica a funcao createHtmlElement', () => {
  it('verifica se ao nao passar paramentro retorna div,'
  + 'e quando passado retorna a tag correta', () => {
    expect(createHtmlElement().tagName).toBe('DIV');
    expect(createHtmlElement('div').tagName).toBe('DIV');
    expect(createHtmlElement('p').tagName).toBe('P');
    expect(createHtmlElement('span').tagName).toBe('SPAN');
    expect(createHtmlElement('form').tagName).toBe('FORM');
    expect(createHtmlElement('header').tagName).toBe('HEADER');
    expect(createHtmlElement('img').tagName).toBe('IMG');
    expect(createHtmlElement('footer').tagName).toBe('FOOTER');
  });

  it('verifica se ao passar os atributos, o elemento retornado possui os mesmos', () => {
    const htmlElement = createHtmlElement('span', attributes);
    expect(htmlElement).toBeDefined();
    expect(htmlElement.tagName).toBe('SPAN');
    expect(htmlElement.className).toBe('class-test');
    expect(htmlElement.id).toBe('id-test');
    expect(htmlElement.innerHTML).toBe('texto de teste');
  });
});
