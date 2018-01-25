import { cardSearcher, familySearcher } from "./static";

export const translateToGrid = state => {
  return getMatrix(state).map(r => {
    return r.map(c => {
      const card = cardSearcher(c);
      if (!card) return { empty: true };
      return Object.assign(
        {
          family: familySearcher(getFamilyId(card)),
          master: getMaster(state) === c
        },
        card
      );
    });
  });
};

//get X, Y coordinate of a an item in a matrix depending on predicate (zero based)
const getCoordInMatrix = (matrix, predicate) =>
  matrix.reduce((coord, row, rIndex) => {
    const cIndex = row.findIndex(predicate);
    if (cIndex >= 0) {
      coord.x = cIndex;
      coord.y = rIndex;
    }
    return coord;
  }, {});

//get X, Y coordinate of a card by its identifier
export const getCardCoord = matrix => identifier =>
  getCoordInMatrix(matrix, x => x === identifier);

//get X, Y coordinate of master coin
export const getMasterCoord = state =>
  getCardCoord(getMatrix(state))(getMaster(state));

//state selectors
export const getCards = ({ cards }) => cards;
export const getFamilies = ({ families }) => families;
export const getMatrix = ({ matrix }) => matrix;
export const getMaster = ({ master }) => master;

//helpers
export const getId = ({ _id }) => _id;
export const getFamilyId = ({ family_id }) => family_id;
