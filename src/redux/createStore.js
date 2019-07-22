export function createStore(reducer, preloadedState) {
  let listeners = [];
  let currentState = reducer(preloadedState, { type: "" });
  const subscribe = listener => {
    listeners.push(listener);
    let isSubscribed = true;
    const unsubscribe = () => {
      const index = listeners.indexOf(listener);
      listeners = listeners.concat(
        listeners.slice(0, index - 1),
        listeners.slice(index + 1)
      );
      if (!isSubscribed) console.error("this event has been unsubscribed");
      isSubscribed = false;
    };
    return { unsubscribe };
  };
  const dispatch = action => {
    let nexState = reducer(currentState, action);
    listeners.forEach(listener => {
      listener(nexState, currentState);
    });
    currentState = nexState;
  };
  const getState = () => {
    return currentState;
  };
  return {
    subscribe,
    dispatch,
    getState
  };
}
