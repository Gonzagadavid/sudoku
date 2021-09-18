import gameState from '../main.js';

export default function btnSelect() {
  const selected = document.querySelector('.selected');
  if (selected) selected.classList.remove('selected');
  const levelBtn = document
    .querySelector(`[value="${(gameState.difficulty || 'easy').toUpperCase()}"]`);
  if (levelBtn) levelBtn.classList.add('selected');
}
