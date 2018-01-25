import { cardList, familyList } from "../constants/data";
import { hash } from "../helpers/utils";

const getId = ({ _id }) => _id;

//hash all static data
export const cardHash = hash(cardList, getId);
export const familyHash = hash(familyList, getId);

export const cardSearcher = id => cardHash[id];
export const familySearcher = id => familyHash[id];

export default cardList;
