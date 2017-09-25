import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Board from "./components/Board";
import { getGame } from "./logic/initial";

//web application shell (absolute root container)
const Root = ({ store }) => (
  <Provider store={store}>
    <div className="app">
      <Board grid={getGame()} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
