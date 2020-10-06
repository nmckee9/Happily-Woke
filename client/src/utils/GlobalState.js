import React, { createContext, useReducer, useContext } from "react";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  // GET_ERRORS,
  // CLEAR_ERRORS,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const initialAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
};

// const initialErrorState = {
//   msg: {},
//   status: null,
//   id: null,
// };

const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log("local storage set");
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    // case GET_ERRORS:
    //   return {
    //     msg: action.payload,
    //     status: action.payload.status,
    //     id: action.payload.id,
    //   };

    // case CLEAR_ERRORS:
    //   return {
    //     msg: {},
    //     status: null,
    //     id: null,
    //   };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
