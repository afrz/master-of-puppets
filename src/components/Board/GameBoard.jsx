import React from "react";
import styled from "styled-components";

const TileContainer = styled.div`
  padding: 1em;
  margin: 1em;
  color: black;

  height: 60px;
  width: 60px;
  text-align: center;
  white-space: pre-wrap;

  &:hover {
    color: white;
    background: black;
  }

  border: ${props => (props.active ? "3px " : "2px")} solid black;
  opacity: ${props => (props.active ? "1" : "0.5")};
  color: black;
  border-radius: 3px;
  background-color: ${props => props.backcolor};
`;

const EmptyTile = TileContainer.extend`
  border: 0;
  opacity: 0;
`;

const MasterTile = TileContainer.extend`
  background-color: black;
  border-radius: 100%;
  opacity: 1;
`;

const Tile = ({ tile, active, pickCard }) => {
  if (tile.empty === true) {
    return <EmptyTile />;
  }
  if (tile.master === true) return <MasterTile />;

  return (
    <TileContainer
      backcolor={tile.family.color}
      active={active}
      onClick={() => (active ? pickCard(tile) : {})}
    >
      {tile.name}
    </TileContainer>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: floralwhite;
  border-radius: 3px;
  padding: 0;
  margin: 0;
`;

const TileRow = ({ row, active, masterCoord, pickCard }) => (
  <FlexRow active={active}>
    {row.map((col, index) => {
      return (
        <Tile
          key={index}
          tile={col}
          active={active || index === masterCoord.x}
          pickCard={pickCard}
        />
      );
    })}
  </FlexRow>
);

const Board = styled.div`
  margin-top: 20px;
  border: 1px solid #aaa;
`;

const BoardContainer = ({ grid, masterCoord, pickCard }) => {
  // console.log(grid);
  return (
    <Board>
      {grid.map((row, index) => {
        return (
          <TileRow
            key={index}
            row={row}
            active={index === masterCoord.y}
            masterCoord={masterCoord}
            pickCard={pickCard}
          />
        );
      })}
    </Board>
  );
};

export default BoardContainer;
