import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import styled from "styled-components";

import GameBoard from "./components/Board";
import PlayerBoard from "./components/player";

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
      <PlayerBoard />
      <GameBoard />
      <PlayerBoard />
    </AppContainer>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
