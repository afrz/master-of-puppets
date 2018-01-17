import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameBoard from "./GameBoard";
import { selectMatrix } from "../../logic/selectors";

const mapStateToProps = state => {
  const grid = selectMatrix(state);
  return {
    grid
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
