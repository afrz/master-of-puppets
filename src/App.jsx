import React from "react";

import Board from "./components/Board";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}
