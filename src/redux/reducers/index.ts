import { combineReducers } from "redux";
import songReducer from "./song.reducer";

const reducer = combineReducers({
  song: songReducer,
});

export default reducer;
