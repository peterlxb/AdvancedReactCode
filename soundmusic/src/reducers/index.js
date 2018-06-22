import { combineReducers } from "redux";
import personsReducer from "./persons";

export default combineReducers({
  persons: personsReducer
});
