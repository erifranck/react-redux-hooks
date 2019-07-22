const INIT = "@@redux/INIT";
export function combineReducers(reducers) {
  const INITIAL_STATES = {};
  Object.keys(reducers).forEach(key => {
    const state = reducers[key](undefined, { type: INIT });
    INITIAL_STATES[key] = state;
  });
  return (state, action) => {
    const newState = {};
    Object.keys(reducers).forEach(key => {
      newState[key] = reducers[key](state[key], action);
    });
    return newState;
  };
}
