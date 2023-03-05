import { AppDispatch } from "../Store";
import { AUTH_STATUS_CHANGED } from "../Types";

export const authSpotify = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: AUTH_STATUS_CHANGED,
    payload: undefined,
  });
};
