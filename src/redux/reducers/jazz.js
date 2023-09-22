import { JAZZ_QUERY } from "../actions";

const initialState = {
  content: null,
};

const jazzResult = (state = initialState, action) => {
  switch (action.type) {
    case JAZZ_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jazzResult;
