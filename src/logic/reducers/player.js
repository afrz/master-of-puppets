import { PICK_CARD } from "../../constants/actionTypes";
import { getId } from "../selectors";

export default function playerReducer(player, action, chosenCards) {
  const { type } = action;
  if (type === PICK_CARD) {
    //- add card to player basket
    return chosenCards.map(x => getId(x));
  }
  return player;
}
