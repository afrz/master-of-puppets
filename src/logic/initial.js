import { cards, families } from "../constants/cards";

export default { cards, families };

const grid = [];

for (let i = 1; i <= 6; i++) {
  const row = [];

  for (let j = 1; j <= 6; j++) {
    row.push({ name: `${i}-${j}` });
  }

  grid.push(row);
}

export function getGame() {
  return grid;
}
