import { PUT_LIKE } from "../actions";

const initialState = {
  content: [],
};

const like = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LIKE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    default:
      return state;
  }
};

export default like;
