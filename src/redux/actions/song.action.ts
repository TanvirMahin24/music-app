import axios from "axios";
import { BASE_URL } from "../../constants/URL";
import setAuthToken from "../../utils/setAuthToken";
import { AppDispatch } from "../Store";
import { FAV_SONGS, GET_INITIAL_SONG, GET_SEARCH_SONG } from "../Types";
import { recomendations } from "../../demo/recomendation";

export const getInitialSongs = (page: number) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "X-RapidAPI-Key": "9cbef1dfadmshfaf5867bed0820dp1f3051jsnade0ccb329ed",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    const res = await axios.get(
      `${BASE_URL}/songs/list-recommendations?key=484129036&locale=en-US`,
      config
    );

    dispatch({
      type: GET_INITIAL_SONG,
      payload: res.data,
    });

    return true;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

export const getSearchSongs = (text: string) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "X-RapidAPI-Key": "9cbef1dfadmshfaf5867bed0820dp1f3051jsnade0ccb329ed",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    const res = await axios.get(
      `${BASE_URL}/search?term=${text}&limit=20`,
      config
    );
    const list = res.data.tracks.hits.map((track: any) => track.track);
    console.log(list);
    dispatch({
      type: GET_SEARCH_SONG,
      payload: list,
    });

    return true;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

export const favSong = (data: any) => async (dispatch: any) => {
  dispatch({
    type: FAV_SONGS,
    payload: data,
  });
};
