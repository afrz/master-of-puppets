import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import styled from "styled-components";

import GameBoard from "./components/Board";
import PlayerBoard from "./components/Player";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

//web application shell (absolute root container)
const App = ({ store }) => (
  <Provider store={store}>
    <AppContainer>
      <PlayerBoard player="A" />
      <GameBoard />
      <PlayerBoard player="B" right />
    </AppContainer>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
