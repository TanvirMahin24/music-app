import { AppDispatch } from "../Store";
import { TOGGLE_SIDEBAR } from "../Types";

export const playlistSidebarToggle = (data: any) => (dispatch: AppDispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
    payload: data,
  });
};
