export default function checkCompleted(cardMatrix) {
  let bool = true;
  cardMatrix.forEach((row) =>
    row.forEach((number) => {
      if (number === 0) bool = false;
    })
  );
  return bool;
}
