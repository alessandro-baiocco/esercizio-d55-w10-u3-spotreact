import { PUT_LIKE, REMOVE_LIKE } from "../actions";

const initialState = {
  content: [],
};

export const like = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LIKE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_LIKE:
      return {
        ...state,
        content: state.content.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default like;
