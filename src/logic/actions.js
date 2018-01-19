import { PICK_CARD } from "../constants/actionTypes";

import { getId } from "./selectors";

export function pickCard(card) {
  return {
    type: PICK_CARD,
    payload: getId(card)
  };
}

// shuffleGame

export function shuffleGame() {}
