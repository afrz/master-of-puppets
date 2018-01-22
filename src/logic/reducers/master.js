import { PICK_CARD } from "../../constants/actionTypes";

const initState = ""; //random card

export default function masterCoin(state = initState, action) {
  const { type } = action;
  if (type === PICK_CARD) {
    //move master to selected card
    return action.payload;
  }
  return state;
}
