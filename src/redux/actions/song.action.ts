import axios from "axios";
import { BASE_URL } from "../../constants/URL";
import { AppDispatch } from "../Store";
import { GET_INITIAL_SONG } from "../Types";

// AUTH USER DATA ACTION
export const getInitialSongs =
  (page: number) => async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get(`${BASE_URL}/recommendations`);

      dispatch({
        type: GET_INITIAL_SONG,
        payload: res.data,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
