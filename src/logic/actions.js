import { PICK_CARD } from "../constants/actionTypes";

import { getId, getMaster } from "./selectors";

// export function pickCard(card) {
//   return {
//     type: PICK_CARD,
//     payload: getId(card)
//   };
// }

export function pickCard(card) {
  return (dispatch, getState) =>
    dispatch({
      type: PICK_CARD,
      payload: {
        card: getId(card),
        from: getMaster(getState())
      }
    });
}

// shuffleGame

export function shuffleGame() {}
