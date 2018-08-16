import { initialState } from "models/store";
import { login as loginAPI } from "services/auth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(payload) {
  let { name, password } = payload;
  name = name ? name.trim() : "";
  password = password ? password.trim() : "";

  return (dispatch, getState) =>
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
