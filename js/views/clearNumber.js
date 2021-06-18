export default function clearNumber(event, element, board) {
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  board[x][y] = 0;
  element.innerHTML = '';
}
