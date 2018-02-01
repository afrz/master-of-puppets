import { combineReducers } from "redux";

import master from "./master";
import board from "./board";

export default combineReducers({
  master,
  board
});
