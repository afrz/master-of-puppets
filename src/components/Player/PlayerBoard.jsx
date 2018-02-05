import React from "react";
import styled from "styled-components";

import { getFamilyId, getId } from "../../logic/selectors";
import { familySearcher } from "../../logic/static";

const PlayerBoardContainer = styled.div`
  background: white;
  width: 100%;
  margin: 10px;
`;

const PlayerBoard = ({ cards }) => {
  const byFamily = cards.reduce((acc, c) => {
    const fid = getFamilyId(c);
    if (!acc[fid]) acc[fid] = [];

    acc[fid].push(c);
    return acc;
  }, {});

  return (
    <PlayerBoardContainer>
      {Object.keys(byFamily).map(fid => {
        const fam = familySearcher(fid);
        return <FamilyThumb key={fid} family={fam} cards={byFamily[fid]} />;
      })}
    </PlayerBoardContainer>
  );
};

const FamilyThumbContainer = styled.div`
  border: 1px solid black;
  margin: 10px 3px;
  background-color: ${props => props.backcolor};
`;

const FamilyThumb = ({ family, cards }) => {
  if (cards.length === 0) return null;

  return (
    <FamilyThumbContainer backcolor={family.color}>
      <div>{family.company}</div>
      {cards.map(x => <CardThumb key={getId(x)} card={x} />)}
    </FamilyThumbContainer>
  );
};

const CardThumbContainer = styled.div``;

const CardThumb = ({ card }) => {
  return <CardThumbContainer>{card.name.substring(0, 1)}</CardThumbContainer>;
};

export default PlayerBoard;
