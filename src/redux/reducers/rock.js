import { ROCK_QUERY } from "../actions";

const initialState = {
  content: null,
};

const rockResult = (state = initialState, action) => {
  switch (action.type) {
    case ROCK_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default rockResult;
