import { PICK_CARD } from "../../constants/actionTypes";
import { getChosenCards } from "../selectors";

import matrixReducer, { generateMatrix } from "./matrix";
import playerReducer from "./player";

const initState = {
  matrix: generateMatrix(6),
  playerA: [],
  playerB: [],
  currentPlayer: "A"
};

export default function boardReducer(state = initState, action) {
  const { type } = action;
  if (type === PICK_CARD) {
    const cards = getChosenCards(state.matrix, action.payload);
    const { currentPlayer } = state;
    const isA = currentPlayer === "A";

    return {
      matrix: matrixReducer(state.matrix, action, cards),
      currentPlayer: isA ? "B" : "A",

      playerA: isA
        ? playerReducer(state.playerA, action, cards)
        : state.playerA,

      playerB: !isA
        ? playerReducer(state.playerB, action, cards)
        : state.playerB
    };
  }
  return state;
}
