export const selectMatrix = state => {
  return getMatrix(state).map(r => {
    return r.map(c => {
      const card = getCard(state, c);
      return Object.assign(
        {
          family: getFamily(state, card.family_id)
        },
        card
      );
    });
  });
};

//get X, Y coordinate of master coin (zero based)
export const getMasterPoint = grid =>
  grid.reduce((acc, r, rIndex) => {
    const cIndex = r.findIndex(c => c.master);
    if (cIndex >= 0) {
      acc.col = cIndex;
      acc.row = rIndex;
    }
    return acc;
  }, {});

//state selectors
export const getMatrix = ({ matrix }) => matrix;
export const getCards = ({ cards }) => cards;
export const getFamilies = ({ families }) => families;

//helpers
export const getCard = (state, id) => getCards(state)[id];
export const getFamily = (state, id) => getFamilies(state)[id];
export const getId = ({ _id }) => _id;
