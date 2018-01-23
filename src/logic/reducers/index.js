import { combineReducers } from "redux";

import master from "./master";
import player from "./player";

import { cardList, familyList } from "../../constants/data";
import { PICK_CARD, EMPTY_CARD } from "../../constants/actionTypes";
import { hash, shuffle, replace } from "../../helpers/utils";

import { getId, getCardCoord } from "../selectors";

function matrix(state = generateMatrix(cardList, 6), action) {
  const { type } = action;
  if (type === PICK_CARD) {
    const identifier = action.payload;

    const coord = getCardCoord(state)(identifier);

    //alter matrix, move master to card place
    const row = state[coord.y];
    const newRow = replace(row, identifier, EMPTY_CARD);

    return replace(state, row, newRow);
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

function cards(state = hash(cardList, getId)) {
  return state;
}

function families(state = hash(familyList, getId)) {
  return state;
}

export default combineReducers({
  matrix,
  families,
  cards,
  master,
  player
});
