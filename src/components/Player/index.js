import { connect } from "react-redux";

import {
  translateToCards,
  getBoard,
  getCurrentPlayer
} from "../../logic/selectors";

import PlayerBoard from "./PlayerBoard";

const mapStateToProps = (state, ownProps) => {
  const playerName = ownProps.player;
  return {
    cards: translateToCards(getBoard(state)[`player${playerName}`]),
    current: getCurrentPlayer(state) === playerName,
    name: playerName
  };
};

export default connect(mapStateToProps)(PlayerBoard);
