import { combineReducers } from "redux";
import playlistReducer from "./playlist.reducer";
import songReducer from "./song.reducer";

const reducer = combineReducers({
  song: songReducer,
  playlist: playlistReducer,
});

export default reducer;
