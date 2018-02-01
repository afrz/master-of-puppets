import { cardSearcher, familySearcher } from "./static";
import { EMPTY_CARD } from "../constants/actionTypes";

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
export const getBoard = ({ board }) => board;
export const getCards = ({ cards }) => cards;
export const getFamilies = ({ families }) => families;
export const getMaster = ({ master }) => master;
export const getMatrix = state => getBoard(state).matrix;

//helpers
export const getId = ({ _id }) => _id;
export const getFamilyId = ({ family_id }) => family_id;
export const isEmpty = card => card === EMPTY_CARD;

export function getChosenCards(matrix, { from, card }) {
  //
  const go = getCardCoord(matrix)(from);
  const to = getCardCoord(matrix)(card);

  const pickedCard = cardSearcher(card);
  const masterCard = cardSearcher(from);
  const pickedFamily = getId(familySearcher(getFamilyId(pickedCard)));

  //select all cards between coordinates
  return (
    getPathBetweenCoords(go, to)
      //map to real cards
      .map(coord => cardSearcher(matrix[coord.y][coord.x]))
      .filter(card => undefined !== card)
      //only from chosen/picked family
      .filter(card => getFamilyId(card) === pickedFamily)
      //except previous master
      .filter(card => card !== masterCard)
  );
}

function getPathBetweenCoords(from, to) {
  const coords = [];

  let start = from;
  let end = to;

  //case movement is going backwards
  if (from.x > to.x || from.y > to.y) {
    start = to;
    end = from;
  }

  //double loop but as movement is unidirectional, it will be o(n)
  for (let x = start.x; x <= end.x; x++) {
    for (let y = start.y; y <= end.y; y++) {
      coords.push({
        x,
        y
      });
    }
  }

  return coords;
}
