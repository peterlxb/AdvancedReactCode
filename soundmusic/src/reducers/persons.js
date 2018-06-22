import { FETCH_STAR_WARS_REQUEST } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STAR_WARS_REQUEST:
      return {
        ...state,
        persons: action.data
      };
    default:
      return state;
  }
}
