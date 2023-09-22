import { ALBUM_QUERY } from "../actions";

const initialState = {
  content: null,
};

const albumResult = (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default albumResult;
