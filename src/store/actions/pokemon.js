import { POKEMON } from "../constants";

export const setPokemon = (data) => {
  return {
    type: POKEMON,
    data,
  };
};
