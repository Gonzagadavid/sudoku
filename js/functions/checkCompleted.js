export default function checkCompleted(board) {
  let bool = true;
  board.forEach((row) =>
    row.forEach((number) => {
      if (number === 0) bool = false;
    })
  );
  return bool;
}
