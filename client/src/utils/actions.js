import axios from "axios";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios.get("/auth/user", tokenConfig(getState)).then((res) =>
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  );
};

const tokenConfig = (getState) => {
  //Get token from local storage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "appication/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
