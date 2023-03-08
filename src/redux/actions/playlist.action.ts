import { AppDispatch } from "../Store";
import { CREATE_PLAYLIST, EDIT_PLAYLIST, TOGGLE_SIDEBAR } from "../Types";

export const playlistSidebarToggle = (data: any) => (dispatch: AppDispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
    payload: data,
  });
};
export const createPlaylist = (name: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: CREATE_PLAYLIST,
    payload: name,
  });
};
export const savePlaylist = (data: any) => (dispatch: AppDispatch) => {
  if (data && data[0]) {
    dispatch({
      type: EDIT_PLAYLIST,
      payload: data[0],
    });
  }
};
