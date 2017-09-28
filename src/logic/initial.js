import { cards, families } from "../constants/cards";
import { getId } from "./selectors";

function generateBoard(matrixSize) {
  return shuffle(cards).reduce((matrix, card, index) => {
    if (index % matrixSize === 0) {
      //new row
      matrix.push([getId(card)]);
    } else {
      //current row
      matrix[matrix.length - 1].push(getId(card));
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

function mapToDico(array) {
  return array.reduce((acc, x) => {
    acc[x._id] = x;
    return acc;
  }, {});
}

export default {
  cards: mapToDico(cards),
  families: mapToDico(families),
  matrix: generateBoard(6)
};
