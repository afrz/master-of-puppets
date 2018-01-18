//get X, Y coordinate of master coin (zero based)
const getCardCoord = (matrix, id) =>
  matrix.reduce((coord, row, rIndex) => {
    const cIndex = row.findIndex(col => id);
    if (cIndex >= 0) {
      coord.x = cIndex;
      coord.y = rIndex;
    }
    return coord;
  }, {});

export default function(state, action) {
  const { type } = action;
  if (type === "PICK_CARD") {
    console.log(getCardCoord(state.matrix, action.payload));

    //- add card to player basket
    //alter matrix, move master to card place
  }
  return state;
}
