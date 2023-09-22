import { ARTIST_QUERY } from "../actions";

const initialState = {
  content: null,
};

const artistResult = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default artistResult;
