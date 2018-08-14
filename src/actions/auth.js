import { initialState } from "models/store";
import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(payload) {
  return (dispatch, getState) =>
    getUserByName(payload.userName).then(
      res => {
        console.info(res);
        if (Array.isArray(res.data) && res.data.length === 1) {
          dispatch({
            type: LOGIN,
            payload: { userName: res.data.name, login: true }
          });
        }
      },
      err => {
        console.info(err);
      }
    );
}

export function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}

export default function authReducer(state = { ...initialState.auth }, action) {
  const rtn = { ...state };
  console.info(action);
  switch (action.type) {
    case LOGIN: {
      return (dispatch, getState) =>
        getUserByName(action.userName).then(
          res => {
            console.info(res);
          },
          err => {
            console.info(err);
          }
        );
      break;
    }
    case LOGOUT: {
      return (dispatch, getState) => {
        dispatch(getUserByName(action.username)).then(
          res => {
            console.info(res);
          },
          rej => {
            console.info(rej);
          }
        );
      };
      break;
    }
    default: {
      return rtn;
    }
  }
  return rtn;
}

function getUserByName(name) {
  return axios.get("/ams/user", {
    params: {
      name
    }
  });
}
