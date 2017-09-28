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

export const getMatrix = ({ matrix }) => matrix;

export const getCards = ({ cards }) => cards;
export const getFamilies = ({ families }) => families;

export const getId = ({ _id }) => _id;

export const getCard = (state, id) => getCards(state)[id];
export const getFamily = (state, id) => getFamilies(state)[id];
