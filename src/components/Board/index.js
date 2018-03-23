import { connect } from "react-redux";

import GameBoard from "./GameBoard";
import { translateToGrid, getMasterCoord } from "../../logic/selectors";
import { pickCard } from "../../logic/actions";

const hasEnd = (grid, master) => {
  let end = true;

  grid.forEach((row, rIndex) => {
    row.forEach((tile, cIndex) => {
      //avoid master coin
      if (!tile.master) {
        //but tile on master row/col
        if (master.y === rIndex || master.x === cIndex) {
          end = end && tile.empty;
        }
      }
    });
  });

  return end;
};

const mapStateToProps = state => {
  const grid = translateToGrid(state);
  const masterCoord = getMasterCoord(state);
  const end = hasEnd(grid, masterCoord);

  return {
    grid,
    masterCoord,
    end
  };
};

const mapDispatchToProps = { pickCard };
export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
