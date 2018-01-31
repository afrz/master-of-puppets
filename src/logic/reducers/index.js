import { combineReducers } from "redux";

import master from "./master";
import player from "./player";

import { PICK_CARD, EMPTY_CARD } from "../../constants/actionTypes";
import { shuffle, replace } from "../../helpers/utils";

import { getId, getChosenCards } from "../selectors";
import cardList, { cardSearcher } from "../static";

function matrix(state = generateMatrix(cardList, 6), action) {
  const { type } = action;

  if (type === PICK_CARD) {
    const masterCard = cardSearcher(action.payload.from);
    const pickedCard = cardSearcher(action.payload.card);

    //select all cards between coordinates to be emptied
    const cards = getChosenCards(state, action.payload)
      //except picked card, which will becomes the master
      .filter(card => card !== pickedCard)
      //force add existing master which will be emptied
      .concat(masterCard);

    //alter matrix, empty all chosen card
    return state.map(row => {
      let newRow = row;
      cards.forEach(c => {
        newRow = replace(newRow, getId(c), EMPTY_CARD);
      });

      return newRow;
    });
  }
  return state;
}

function generateMatrix(cardList, matrixSize) {
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

export default combineReducers({
  master,
  matrix,
  player
});
