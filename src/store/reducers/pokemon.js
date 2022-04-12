import { POKEMON } from "../constants";
const initialState = {
  pokemon:null,
};
export default (state = initialState, action) => {
  if (action.type === POKEMON) {
    return {
      ...state,
      pokemon: action.data,
    };
  }
  return { ...state };
};
