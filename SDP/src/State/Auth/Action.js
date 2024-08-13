import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGOUT,
} from "./ActionType.js";
const token = localStorage.getItem("jwt");
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailuer = (error) => ({ type: REGISTER_FAILURE, payloat: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    console.log(userData);
    const response = await axios.post(
      `http://localhost:8181/api/auth/signup`,
      userData
    );
    console.log(response);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailuer(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailuer = (error) => ({ type: LOGIN_FAILURE, payloat: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `http://localhost:8181/api/auth/signin`,
      userData
    );
    console.log("enter");
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user", user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailuer(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailuer = (error) => ({ type: GET_USER_FAILURE, payloat: error });

export const getuser = () => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(
      `http://localhost:8181/api/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = response.data;
    console.log("user", user);
    localStorage.setItem("role", user.role);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailuer(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
