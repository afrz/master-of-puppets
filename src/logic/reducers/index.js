import { combineReducers } from "redux";

import master from "./master";
import player from "./player";

import { PICK_CARD, EMPTY_CARD } from "../../constants/actionTypes";
import { shuffle, replace } from "../../helpers/utils";

import { getId, getCardCoord, getFamilyId } from "../selectors";
import cardList, { cardSearcher, familySearcher } from "../static";

function matrix(state = generateMatrix(cardList, 6), action) {
  const { type } = action;
  if (type === PICK_CARD) {
    const from = getCardCoord(state)(action.payload.from);
    const to = getCardCoord(state)(action.payload.card);

    // console.log(from, to);
    const pickedCard = cardSearcher(action.payload.card);
    const pickedFamily = getId(familySearcher(getFamilyId(pickedCard)));

    //select all cards between coordinates and filter them by chosen family
    const cards = getPathBetweenCoords(from, to)
      .map(coord => cardSearcher(state[coord.y][coord.x]))
      .filter(card => getFamilyId(card) === pickedFamily);

    cards.forEach(c => console.log(c));

    return state.map(row => {
      let newRow = row;
      cards.forEach(c => {
        newRow = replace(newRow, getId(c), EMPTY_CARD);
      });
      console.log(newRow);
      return newRow;
    });

    // //alter matrix, empty cards between master and picked card
    // const row = state[from.y];
    // const newRow = replace(row, action.payload.from, EMPTY_CARD);

    // return replace(state, row, newRow);
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

function getPathBetweenCoords(from, to, matrix) {
  const coords = [];

  let start = from;
  let end = to;

  //case movement is going backwards
  if (from.x > to.x || from.y > to.y) {
    start = to;
    end = from;
  }

  //double loop but as movement is unidirectional, it will be o(n)
  for (let x = start.x; x <= end.x; x++) {
    for (let y = start.y; y <= end.y; y++) {
      coords.push({
        x,
        y
      });
    }
  }

  return coords;
}

export default combineReducers({
  matrix,
  master,
  player
});
