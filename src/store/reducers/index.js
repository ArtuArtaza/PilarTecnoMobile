import { combineReducers } from "redux";
import user from "./user";
import pokemon from "./pokemon";
export const rootReducer = combineReducers({
  user,
  pokemon
});
