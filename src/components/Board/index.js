import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameBoard from "./GameBoard";
import { getMatrix } from "../../logic/selectors";

const mapStateToProps = state => ({
  grid: getMatrix(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
