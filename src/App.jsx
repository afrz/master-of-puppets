import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import GameBoard from "./components/Board";

//web application shell (absolute root container)
const App = ({ store }) => (
  <Provider store={store}>
    <div className="app">
      <GameBoard />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
