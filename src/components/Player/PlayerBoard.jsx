import React from "react";
import styled from "styled-components";

const PlayerBoardContainer = styled.div`
  background: white;
  border: 1px dashed gray;
  width: 100%;
  margin: 10px;
`;

const PlayerBoard = ({ cards }) => {
  return (
    <PlayerBoardContainer>
      {cards.map(x => <div key={x._id}>{x.name}</div>)}
    </PlayerBoardContainer>
  );
};

export default PlayerBoard;
