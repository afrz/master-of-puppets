import React from "react";
import styled from "styled-components";

const TileContainer = styled.div`
  padding: 1em;
  margin: 1em;
  color: black;

  height: 60px;
  width: 60px;
  text-align: center;

  &:hover {
    color: white;
    background: black;
  }

  border: ${props => (props.active ? "3px " : "2px")} solid black;

  opacity: ${props => (props.active ? "1" : "0.5")};
  color: ${props => (props.master ? "white" : "black")};
  background: ${props => (props.master ? "black" : props.backcolor)};
  border-radius: ${props => (props.master ? "100%" : "3px")};
`;

const EmptyTileContainer = TileContainer.extend`
  border: 0;
  opacity: 0;
`;

const Tile = ({ tile, active, pickCard }) => {
  if (tile.empty === true) {
    return <EmptyTileContainer />;
  }
  return (
    <TileContainer
      master={tile.master}
      backcolor={tile.family.color}
      active={active}
      onClick={() => (active && !tile.master ? pickCard(tile) : {})}
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

const Board = ({ grid, masterCoord, pickCard }) => {
  // console.log(grid);
  return (
    <div>
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
    </div>
  );
};

export default Board;
