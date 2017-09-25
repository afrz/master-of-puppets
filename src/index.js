import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

import registerServiceWorker from "./helpers/serviceWorker";
import App from "./App";
import { configureStore } from "./logic/store";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const store = configureStore();

render(React.createElement(App, { store }), document.getElementById("root"));

registerServiceWorker();
