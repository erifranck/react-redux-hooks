export const MAIN_TYPE = "Main_type";

const INITIAL_STATE = {
  message: "hola"
};
export function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAIN_TYPE:
      return {
        ...state,
        message: "funciono mi implementacion de redux"
      };
    default:
      return state;
  }
}
