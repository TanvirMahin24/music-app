import axios from "axios";
import { BASE_URL } from "../../constants/URL";
import setAuthToken from "../../utils/setAuthToken";
import { AppDispatch } from "../Store";
import { FAV_SONGS, GET_INITIAL_SONG, GET_SEARCH_SONG } from "../Types";
import { recomendations } from "../../demo/recomendation";

export const getInitialSongs = (page: number) => async (dispatch: any) => {
  try {
    // const res = await axios.get(
    //   `${BASE_URL}/recommendations?seed_genres=classical,country&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA`
    // );

    // dispatch({
    //   type: GET_INITIAL_SONG,
    //   payload: res.data,
    // });

    dispatch({
      type: GET_INITIAL_SONG,
      payload: recomendations,
    });
    return true;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

export const getSearchSongs = (text: string) => async (dispatch: any) => {
  try {
    // const res = await axios.get(
    //   `${BASE_URL}/recommendations?seed_genres=classical,country&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA`
    // );

    // dispatch({
    //   type: GET_INITIAL_SONG,
    //   payload: res.data,
    // });

    dispatch({
      type: GET_SEARCH_SONG,
      payload: recomendations,
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
