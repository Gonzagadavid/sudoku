export default function clearNumber(element, board) {
  if (!element.innerHTML) return;
  const x = +element.id.replace(/(x=)|y=\d/g, '');
  const y = +element.id.replace(/(y=)|x=\d/g, '');
  board[x][y] = 0;
  element.innerHTML = '';
}
