import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { connect, Provider } from "./redux";
import { MAIN_TYPE } from "./reducers/main";
import Counter from "./components/counter";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
