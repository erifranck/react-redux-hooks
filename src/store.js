import { createStore, combineReducers } from "./redux";
import { main } from "./reducers/main";
import { counter } from "./reducers/counter";

const reducer = combineReducers({
  main,
  counter
});

export const store = createStore(reducer, {});
