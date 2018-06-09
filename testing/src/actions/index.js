import { SAVE_COMMENT } from "actions/types";

export default function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}
