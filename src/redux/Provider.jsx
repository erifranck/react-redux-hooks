import React from "react";
import PropTypes from "prop-types";

export const ReduxContext = React.createContext({});

export const Provider = props => {
  const [state, setState] = React.useState(props.store.getState());
  React.useEffect(() => {
    props.store.subscribe(storeState => {
      setState(storeState);
    });
  }, [props.store]);

  return (
    <ReduxContext.Provider value={{ state, dispatch: props.store.dispatch }}>
      {props.children}
    </ReduxContext.Provider>
  );
};

Provider.prototypes = {
  store: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
