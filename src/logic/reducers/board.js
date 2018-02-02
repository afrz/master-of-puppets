import { PICK_CARD } from "../../constants/actionTypes";
import { getChosenCards } from "../selectors";

import matrixReducer, { generateMatrix } from "./matrix";
import playerReducer from "./player";

//random card
const initState = {
  matrix: generateMatrix(6),
  player: []
};

export default function boardReducer(state = initState, action) {
  const { type } = action;
  if (type === PICK_CARD) {
    const cards = getChosenCards(state.matrix, action.payload);

    return {
      matrix: matrixReducer(state.matrix, action, cards),
      player: playerReducer(state.player, action, cards)
    };
  }
  return state;
}
