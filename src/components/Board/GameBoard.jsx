import React from "react";
import styled from "styled-components";

const TileContainer = styled.div`
  border: 2px solid black;
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

  color: ${props => (props.master ? "white" : "black")};
  background: ${props => (props.master ? "black" : props.backcolor)};
  border-radius: ${props => (props.master ? "100%" : "3px")};
`;

const Tile = ({ tile }) => {
  return (
    <TileContainer master={tile.master} backcolor={tile.family.color}>
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

const TileRow = ({ row }) => (
  <FlexRow>
    {row.map((col, index) => {
      return <Tile key={index} tile={col} />;
    })}
  </FlexRow>
);

const Board = ({ grid }) => (
  <div>
    {grid.map((row, index) => {
      return <TileRow key={index} row={row} />;
    })}
  </div>
);

export default Board;
