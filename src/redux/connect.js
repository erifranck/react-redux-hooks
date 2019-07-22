import React from "react";
import { ReduxContext } from "./Provider";

export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => Component => props => (
  <ReduxContext.Consumer>
    {({ state, dispatch }) => {
      const componentProps = {
        ...props,
        ...mapStateToProps(state),
        ...mapDispatchToProps(dispatch, state)
      };
      return <Component {...componentProps} />;
    }}
  </ReduxContext.Consumer>
);
