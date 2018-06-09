import { combineReducers } from "redux";
import commentReducer from "reducers/comments";

export default combineReducers({
  comments: commentReducer
});
