import { GET_INITIAL_SONG } from "../Types";

const initialState = {
  song: null,
};

const songReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_INITIAL_SONG:
      return {
        ...state,
        song: { ...payload },
      };

    default:
      return state;
  }
};

export default songReducer;
