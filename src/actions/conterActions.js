import {
  COUNTER_PLUS,
  COUNTER_RESET,
  COUNTER_MINUS
} from "../reducers/counter";

export const increase = () => ({
  type: COUNTER_PLUS
});

export const decrease = () => ({
  type: COUNTER_MINUS
});

export const reset = () => ({
  type: COUNTER_RESET
});
