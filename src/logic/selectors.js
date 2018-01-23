export const translateToGrid = state => {
  return getMatrix(state).map(r => {
    return r.map(c => {
      const card = getCard(state, c);

      if (!card) return { empty: true };
      return Object.assign(
        {
          family: getFamily(state, card.family_id),
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
export const getMatrix = ({ matrix }) => matrix;
export const getCards = ({ cards }) => cards;
export const getFamilies = ({ families }) => families;
export const getMaster = ({ master }) => master;

//helpers
export const getCard = (state, id) => getCards(state)[id];
export const getFamily = (state, id) => getFamilies(state)[id];
export const getId = ({ _id }) => _id;
