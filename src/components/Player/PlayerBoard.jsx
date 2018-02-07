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
  margin-bottom: 20px;

  .header {
    font-weight: bold;

    span {
      display: inline-block;
      padding: 5px;
      min-width: 10px;

      margin: 5px;
      border-radius: 15px;
      color: white;
      background-color: ${props => props.backcolor};
    }
  }

  .content {
    display: flex;
  }
`;

const FamilyThumb = ({ family, cards }) => {
  if (cards.length === 0) return null;

  return (
    <FamilyThumbContainer backcolor={family.color}>
      <div className="header">
        <span>{cards.length}</span>
        {family.company}
      </div>
      <div className="content">
        {cards.map(x => <CardThumb key={getId(x)} card={x} family={family} />)}
      </div>
    </FamilyThumbContainer>
  );
};

const CardThumbContainer = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  height: 15px;
  width: 15px;
  text-align: center;

  background-color: ${props => props.backcolor};
`;

const CardThumb = ({ card, family }) => {
  return (
    <CardThumbContainer backcolor={family.color}>
      {card.name.substring(0, 1)}
    </CardThumbContainer>
  );
};

export default PlayerBoard;
