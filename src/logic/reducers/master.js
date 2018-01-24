import { PICK_CARD } from "../../constants/actionTypes";
import { cardList } from "../../constants/data";
import { shuffle } from "../../helpers/utils";
import { getId } from "../selectors";

//random card
const initState = getId(shuffle(cardList)[0]);

export default function masterCoin(state = initState, action) {
  const { type } = action;
  if (type === PICK_CARD) {
    //move master to selected card
    return action.payload.card;
  }
  return state;
}
