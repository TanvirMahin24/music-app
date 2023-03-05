import { AUTH_STATUS_CHANGED } from "../Types";

const initialState = {
  auth: false,
};

const authReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_STATUS_CHANGED:
      return {
        ...state,
        auth: true,
      };

    default:
      return state;
  }
};

export default authReducer;
