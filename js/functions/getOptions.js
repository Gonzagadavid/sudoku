import cards from '../cards/cards.js';
import gameState from '../index.js';

export default function getOptions(x, y) {
  const cardMatrix = cards[`level${gameState.level}`];
  const startX = x < 3 ? 0 : x < 6 ? 3 : 6;
  const startY = y < 3 ? 0 : y < 6 ? 3 : 6;
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const usedNumbers = [];

  for (let index = 0; index < cardMatrix.length; index += 1) {
    usedNumbers.push(cardMatrix[x][index]);
    usedNumbers.push(cardMatrix[index][y]);
  }

  for (let xIndex = startX; xIndex < startX + 3; xIndex += 1) {
    for (let yIndex = startY; yIndex < startY + 3; yIndex += 1) {
      usedNumbers.push(cardMatrix[xIndex][yIndex]);
    }
  }

  return options.filter((number) => !usedNumbers.includes(number));
}
