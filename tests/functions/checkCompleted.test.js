import { expect, describe, it } from '@jest/globals';
import functions from '../../js/functions';
import boards from '../mock/boards';

const { checkCompleted } = functions;
const { board, boardSolved } = boards;

describe('verifica a funcao checkCompleted', () => {
  it('verifica se ao passar uma cartela incompleta retorna false', () => {
    expect(checkCompleted(board)).toBeFalsy();
  });
  it('verifica se ao passar uma cartela completa retorna true', () => {
    expect(checkCompleted(boardSolved)).toBeTruthy();
  });
  it('verifica se ao passar parametro retorna false', () => {
    expect(checkCompleted()).toBeFalsy();
  });
});
