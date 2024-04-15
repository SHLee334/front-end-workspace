import { combineReducers } from "redux";
import counter from "./counter";

const store = combineReducers({
  // counter.js에서 export default 한거 연결
  counter,
});

export default store;
