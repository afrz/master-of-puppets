import React from "react";

import Board from "./components/Board";
import { getGame } from "./logic/store";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Board grid={getGame()} />
      </div>
    );
  }
}
