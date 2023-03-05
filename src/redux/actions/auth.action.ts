import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/URL";
import { AppDispatch } from "../Store";
import {
  AUTH_USER_LOAD,
  AUTH_USER_LOAD_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../Types";

// LOGIN ACTION
export const loginAction =
  (values: { email: any; password: any }) => async (dispatch: AppDispatch) => {
    try {
      const data = {
        phone: values.email,
        password: values.password,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const res = await axios.post(
        `${BASE_URL}/api/login`,
        JSON.stringify(data),
        config
      );

      localStorage.setItem("dlifes_token", res.data.token);
      //setAuthToken(res.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });

      return true;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return false;
    }
  };

// REGISTER ACTION
export const registerAction =
  (values: { fname: any; lname: any; phone: any; email: any; password: any }) =>
  async (dispatch: AppDispatch) => {
    try {
      const data = {
        first_name: values.fname,
        last_name: values.lname,
        phone: values.phone,
        email: values.email,
        password: values.password,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const res = await axios.post(
        `${BASE_URL}/api/register`,
        JSON.stringify(data),
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data,
      });

      return true;
    } catch (error: any) {
      dispatch({
        type: REGISTER_FAIL,
      });
      toast.error(error.response.data.message);
      return false;
    }
  };

// LOGOUT ACTION
export const logoutAction = () => async (dispatch: AppDispatch) => {
  try {
    localStorage.removeItem("dlifes_token");
    //setAuthToken();
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    toast.success("Logout Successfully");
    return true;
  } catch (error: any) {
    dispatch({
      type: LOGOUT_FAIL,
    });
    toast.error(error.response.data.message);
    return false;
  }
};

// AUTH USER DATA ACTION
export const authUserAction = () => async (dispatch: AppDispatch) => {
  try {
    const config = {
      withCredentials: true,
    };

    const res = await axios.get(`${BASE_URL}/api/user/auth`, config);

    dispatch({
      type: AUTH_USER_LOAD,
      payload: res.data.data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: AUTH_USER_LOAD_ERROR,
    });
    return false;
  }
};
