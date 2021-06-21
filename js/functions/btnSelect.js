import gameState from '../index.js';

export default function btnSelect() {
  const selected = document.querySelector('.selected');
  if (selected) selected.classList.remove('selected');
  const levelBtn = document.querySelector(`[value="${gameState.difficulty.toUpperCase()}"]`);
  levelBtn.classList.add('selected');
}
