import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import songReducer from "./song.reducer";

const reducer = combineReducers({
  song: songReducer,
  auth: authReducer,
});

export default reducer;
