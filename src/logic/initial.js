import { cards, families } from "../constants/cards";

function generateBoard(matrixSize) {
  return shuffle(cards).reduce((matrix, card, index) => {
    if (index % matrixSize === 0) {
      //new row
      matrix.push([card]);
    } else {
      //current row
      matrix[matrix.length - 1].push(card);
    }
    return matrix;
  }, []);
}

function shuffle(array) {
  let arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default { cards, families, matrix: generateBoard(6) };
