import { expect, describe, it } from '@jest/globals';
import functions from '../../js/functions';
import boards from '../mock/boards';

const { getOptions } = functions;
const { board } = boards;

describe('verifica a funcao getOptions', () => {
  it('Ao passar o board e a posicao de um numero no primeiro quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(1, 1, board)).toEqual([2, 4, 7]);
  });

  it('Ao passar o board e a posicao de um numero no segundo quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(2, 4, board)).toEqual([3, 4]);
  });

  it('Ao passar o board e a posicao de um numero no terceiro quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(1, 7, board)).toEqual([2, 3, 4]);
  });

  it('Ao passar o board e a posicao de um numero no quarto quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(4, 1, board)).toEqual([2, 5]);
  });

  it('Ao passar o board e a posicao de um numero no quinto quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(4, 4, board)).toEqual([5]);
  });

  it('Ao passar o board e a posicao de um numero no sexto quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(4, 7, board)).toEqual([2, 5, 9]);
  });

  it('Ao passar o board e a posicao de um numero no setimo quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(7, 1, board)).toEqual([2, 7, 8]);
  });

  it('Ao passar o board e a posicao de um numero no oitavo quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(6, 4, board)).toEqual([3, 5]);
  });

  it('Ao passar o board e a posicao de um numero no nono quadrante retorna'
  + ' um array com as opcoes corretas', () => {
    expect(getOptions(7, 7, board)).toEqual([3]);
  });
});
