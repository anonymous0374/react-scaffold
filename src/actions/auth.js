import { initialState } from "models/store";
import {
  login as loginAPI,
  logout as logoutAPI,
  getUser as getUserAPI
} from "services/auth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";

export function login(credentials) {
  let { name, password } = credentials;
  name = name ? name.trim() : "";
  password = password ? password.trim() : "";

  return dispatch =>
    loginAPI(name, password).then(
      res => {
        const {
          data = {},
          data: { code, msg, user = {} }
        } = res;
        if (!isNaN(code) && code === 0) {
          dispatch({
            type: LOGIN,
            payload: { ...user, authenticated: true, msg }
          });
        } else {
          dispatch({
            type: LOGIN,
            payload: { name: null, authenticated: false, msg }
          });
        }
      },
      err => {
        console.info(err);
      }
    );
}

export function logout(name) {
  return dispatch => {
    logoutAPI(name).then(
      res => {
        const {
          data: { code, msg },
          data = {}
        } = res;

        dispatch({
          type: LOGOUT,
          payload: {
            name: null,
            email: null,
            password: null,
            city: null,
            profession: null,
            gender: false
          }
        });

        if (!(isNaN(code) && code === 0)) {
          throw new Error(msg);
        }
      },
      err => {
        throw new Error(err);
      }
    );
  };
}

export function getUser() {
  return dispatch => {
    getUserAPI().then(
      res => {
        const {
          data: { code, msg, name, ...rest },
          data = {}
        } = res;

        if (!isNaN(code) && code === 0 && name !== "Guest") {
          return dispatch({
            type: GET_USER,
            payload: { code: 0, ...rest, authenticated: true }
          });
        }

        return dispatch({
          type: GET_USER,
          payload: {
            ...data
          }
        });
      },
      err =>
        dispatch({
          type: GET_USER,
          payload: { authenticated: false, code: -1, msg: err }
        })
    );
  };
}
