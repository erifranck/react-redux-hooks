export const COUNTER_PLUS = "COUNTER_PLUS";
export const COUNTER_MINUS = "COUNTER_MINUS";
export const COUNTER_RESET = "COUNTER_RESET";

const INITIAL_STATE = {
  value: 0
};

export function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_PLUS:
      return {
        ...state,
        value: state.value + 1
      };
    case COUNTER_MINUS:
      return {
        ...state,
        value: state.value - 1
      };
    case COUNTER_RESET:
      return {
        ...state,
        value: INITIAL_STATE.value
      };
    default:
      return state;
  }
}
