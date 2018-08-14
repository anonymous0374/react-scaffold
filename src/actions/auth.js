import { initialState } from "models/store";
import { login as loginAPI } from "services/auth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(payload) {
  const { userName, password } = payload;
  return (dispatch, getState) =>
    loginAPI(userName, password).then(
      res => {
        const { data } = res;
        if (data && data.code === 0) {
          dispatch({
            type: LOGIN,
            payload: { userName, login: true }
          });
        } else {
          dispatch({
            type: LOGIN,
            payload: { userName: null, login: false }
          });
        }
      },
      err => {
        console.info(err);
      }
    );
}
