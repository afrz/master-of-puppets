
import { PICK_CARD } from "../../constants/actionTypes";


const initState = {
  kept = []
}

export default function player(state =  initState, action) {

  const { type } = action;
  if (type === PICK_CARD) {
    //- add card to player basket
    return Object.assign({}, state, {
      kept : state.kept.concat([action.payload])
    });
  }
  return state;
}