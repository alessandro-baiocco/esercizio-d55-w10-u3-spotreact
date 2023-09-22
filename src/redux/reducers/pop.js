import { POP_QUERY } from "../actions";

const initialState = {
  content: null,
};

const popResult = (state = initialState, action) => {
  switch (action.type) {
    case POP_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default popResult;
