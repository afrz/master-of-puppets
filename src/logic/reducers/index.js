import { combineReducers } from "redux";

import { cardList, familyList } from "../../constants/data";
import { PICK_CARD, EMPTY_CARD } from "../../constants/actionTypes";
import { hash, shuffle, replace } from "../../helpers/utils";

import { getId } from "../selectors";

//get X, Y coordinate of master coin (zero based)
const getCardCoord = (matrix, identifier) =>
  matrix.reduce((coord, row, rIndex) => {
    const cIndex = row.findIndex(col => col === identifier);
    if (cIndex >= 0) {
      coord.x = cIndex;
      coord.y = rIndex;
    }
    return coord;
  }, {});

function matrix(state = generateMatrix(cardList, 6), action) {
  const { type } = action;
  if (type === PICK_CARD) {
    const identifier = action.payload;

    const coord = getCardCoord(state, identifier);

    //- add card to player basket
    //alter matrix, move master to card place
    const row = state[coord.y];
    const newRow = replace(row, identifier, EMPTY_CARD);
    // console.log(newRow);

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
  cards
});
