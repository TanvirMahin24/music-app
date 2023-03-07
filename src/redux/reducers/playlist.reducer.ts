import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  EDIT_PLAYLIST,
  TOGGLE_SIDEBAR,
} from "../Types";

let pls = localStorage.getItem("music-app-pl");

const initialState = {
  playlist: pls
    ? JSON.parse(pls)
    : [{ name: "Your Playlist", tracks: [], id: 1 }],
  sidebar_active: false,
  selected_track: null,
};

const setPlToLocalStorage = (data: any) => {
  localStorage.setItem("music-app-pl", data);
};

const playlistReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PLAYLIST:
      let newId = state.playlist.length + 1;
      let tmpPlaylist = [
        ...state.playlist,
        { name: `Your Playlist ${newId}`, id: newId, tracks: [] },
      ];
      setPlToLocalStorage(tmpPlaylist);
      return {
        ...state,
        playlist: tmpPlaylist,
      };
    case DELETE_PLAYLIST:
      let afterDeletedPL = [
        ...state.playlist.filter((pl: any) => pl.id !== payload),
      ];
      setPlToLocalStorage(afterDeletedPL);
      return {
        ...state,
        playlist: afterDeletedPL,
      };
    case EDIT_PLAYLIST:
      let editedPL = [
        ...state.playlist.map((pl: any) =>
          pl.id === payload.id ? { ...payload } : pl
        ),
      ];
      setPlToLocalStorage(editedPL);
      return {
        ...state,
        playlist: editedPL,
      };
    case TOGGLE_SIDEBAR:
      return payload
        ? {
            ...state,
            selected_track: payload,
            sidebar_active: true,
          }
        : { ...state, selected_track: null, sidebar_active: false };

    default:
      return state;
  }
};

export default playlistReducer;
