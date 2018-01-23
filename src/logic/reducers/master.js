import { PICK_CARD } from "../../constants/actionTypes";
import { cardList } from "../../constants/data";

const initState = cardList[0]._id; //random card

export default function masterCoin(state = initState, action) {
  const { type } = action;
  if (type === PICK_CARD) {
    //move master to selected card
    return action.payload;
  }
  return state;
}
