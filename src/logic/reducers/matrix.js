import { PICK_CARD, EMPTY_CARD } from "../../constants/actionTypes";
import { shuffle, replace } from "../../helpers/utils";

import { getId } from "../selectors";
import cardList, { cardSearcher } from "../static";

export default function matrixReducer(matrix, action, chosenCards) {
  const { type } = action;

  if (type === PICK_CARD) {
    const masterCard = cardSearcher(action.payload.from);
    const pickedCard = cardSearcher(action.payload.card);

    //select all cards between coordinates to be emptied
    const cards = chosenCards
      //except picked card, which will becomes the master
      .filter(card => card !== pickedCard)
      //force add existing master which will be emptied
      .concat(masterCard);

    //alter matrix, empty all chosen card
    return matrix.map(row => {
      let newRow = row;
      cards.forEach(c => {
        newRow = replace(newRow, getId(c), EMPTY_CARD);
      });

      return newRow;
    });
  }
  return matrix;
}

export function generateMatrix(matrixSize) {
  return shuffle(cardList).reduce((matrix, card, index) => {
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
