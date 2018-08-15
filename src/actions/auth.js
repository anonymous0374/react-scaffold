import { initialState } from "models/store";
import { login as loginAPI } from "services/auth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(payload) {
  let { userName, password } = payload;
  userName = userName ? userName.trim() : "";
  password = password ? password.trim() : "";
  return (dispatch, getState) =>
    loginAPI(userName, password).then(
      res => {
        const {
          data = {},
          data: { code, msg }
        } = res;
        if (code && code === 0) {
          dispatch({
            type: LOGIN,
            payload: { userName, login: true }
          });
        } else {
          dispatch({
            type: LOGIN,
            payload: { userName: null, login: false, msg }
          });
        }
      },
      err => {
        console.info(err);
      }
    );
}
