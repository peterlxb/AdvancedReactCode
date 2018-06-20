import { combineReducers } from "redux";
import commentReducer from "reducers/comments";
import authReducers from "reducers/auth";

export default combineReducers({
  comments: commentReducer,
  auth: authReducers
});
