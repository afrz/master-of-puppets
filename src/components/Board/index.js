import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameBoard from "./GameBoard";
import { translateToGrid, getMasterCoord } from "../../logic/selectors";
import { pickCard } from "../../logic/actions";

const mapStateToProps = state => {
  const grid = translateToGrid(state);
  // console.log(state);
  // console.log(getMasterCoord(state));
  return {
    grid,
    masterCoord: getMasterCoord(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ pickCard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
