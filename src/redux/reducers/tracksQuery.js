import { TRACKS_QUERY } from "../actions";

const initialState = {
  content: null,
};

const tracksResult = (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default tracksResult;
