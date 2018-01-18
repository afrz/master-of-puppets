import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameBoard from "./GameBoard";
import { selectMatrix, getMasterPoint } from "../../logic/selectors";
import { pickCard } from "../../logic/actions";

const mapStateToProps = state => {
  const grid = selectMatrix(state);
  //  console.log(grid);
  return {
    grid,
    masterCoord: getMasterPoint(grid)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ pickCard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
