import { combineReducers } from "redux";

import master from "./master";
import player from "./player";

import { PICK_CARD, EMPTY_CARD } from "../../constants/actionTypes";
import { shuffle, replace } from "../../helpers/utils";

import { getId, getCardCoord } from "../selectors";
import cardList, { cardSearcher } from "../static";

function matrix(state = generateMatrix(cardList, 6), action) {
  const { type } = action;
  if (type === PICK_CARD) {
    console.log("matrix", state);
    const from = getCardCoord(state)(action.payload.from);
    const to = getCardCoord(state)(action.payload.card);

    const toCard = cardSearcher(action.payload.card);

    const cards = getCardsBetweenCoords(from, to);

    cards.forEach(coord =>
      console.log(cardSearcher(state[coord.y][coord.x]).name)
    );

    //alter matrix, empty card between master and picked card
    const row = state[from.y];
    const newRow = replace(row, action.payload.from, EMPTY_CARD);

    console.log(from, to);
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

function getCardsBetweenCoords(a, b, matrix) {
  const cards = [];
  //cards.push(a);

  for (let i = a.x; i <= b.x; i++) {
    for (let j = a.y; j <= b.y; j++) {
      console.log(i, j);

      cards.push({
        x: i,
        y: j
      });
    }
  }

  //cards.push(b);
  return cards;
}

export default combineReducers({
  matrix,
  master,
  player
});
