import { toast } from "react-toastify";
import { AppDispatch } from "../Store";
import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  EDIT_PLAYLIST,
  TOGGLE_SIDEBAR,
} from "../Types";

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
export const deletePlaylist = (id: number) => (dispatch: AppDispatch) => {
  toast.success("Playlist deleted!");
  dispatch({
    type: DELETE_PLAYLIST,
    payload: id,
  });
};
export const savePlaylist = (data: any) => (dispatch: AppDispatch) => {
  if (data) {
    dispatch({
      type: EDIT_PLAYLIST,
      payload: data,
    });
  }
};
