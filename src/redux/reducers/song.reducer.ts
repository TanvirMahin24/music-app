import { FAV_SONGS, GET_INITIAL_SONG, GET_SEARCH_SONG } from "../Types";

let favs = localStorage.getItem("music-app-fav");

const initialState = {
  song: null,
  favorite: favs ? JSON.parse(favs) : [],
  search: null,
};

const songReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_INITIAL_SONG:
      return {
        ...state,
        song: { ...payload },
      };
    case GET_SEARCH_SONG:
      return {
        ...state,
        search: payload,
      };

    case FAV_SONGS:
      console.log(payload);
      let finalData = [];
      if (
        state.favorite?.filter((fav: any) => fav.key === payload.key).length > 0
      ) {
        finalData = state.favorite?.filter(
          (fav: any) => fav.key !== payload.key
        );
      } else {
        finalData = [...state.favorite, payload];
      }

      localStorage.setItem("music-app-fav", JSON.stringify(finalData));
      return {
        ...state,
        favorite: finalData,
      };

    default:
      return state;
  }
};

export default songReducer;
