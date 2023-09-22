import { PLAYER } from "../actions";

const initialState = {
  content: null,
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default player;
