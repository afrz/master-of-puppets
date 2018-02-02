import { connect } from "react-redux";

import { translateToCards, getBoard } from "../../logic/selectors";
import PlayerBoard from "./PlayerBoard";

const mapStateToProps = state => {
  return {
    cards: translateToCards(getBoard(state).player)
  };
};

export default connect(mapStateToProps)(PlayerBoard);
