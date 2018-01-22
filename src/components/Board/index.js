import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameBoard from "./GameBoard";
import { translateToGrid, getMasterPoint } from "../../logic/selectors";
import { pickCard } from "../../logic/actions";

const mapStateToProps = state => {
  const grid = translateToGrid(state);
  console.log(state);
  console.log(getMasterPoint(grid));
  return {
    grid,
    masterCoord: getMasterPoint(grid)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ pickCard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
