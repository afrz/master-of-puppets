import React from "react";

import styled from "styled-components";

const TileContainer = styled.div`
  border-radius: 3px;
  border: 2px solid firebrick;
  padding: 2em;
  margin: 1em;
  color: black;
  background: burlywood;

  &:hover {
    background: firebrick;
  }
`;

const Tile = ({ label }) => <TileContainer>{label}</TileContainer>;

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
      return <Tile key={index} label={col.name} />;
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
