import setAuthToken from "../../utils/setAuthToken";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTH_USER_LOAD,
} from "../Types";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

const authReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token_music", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case AUTH_USER_LOAD:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
      localStorage.removeItem("token_music");
      setAuthToken("");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
