import { initialState } from "models/store";
import {
  register as registerAPI,
  abandon as abandonAPI
} from "services/register";

export const REGISTER = "REGISTER";
export const ABANDON = "ABANDON";

export function register(payload) {
  const { basicInfo, extraInfo } = payload;
  return (dispatch, getState) =>
    registerAPI(basicInfo, extraInfo).then(
      res => {
        const {
          data = {},
          data: { code, msg }
        } = res;
        if (code && code === 0) {
          dispatch({
            type: REGISTER,
            payload: { userName, email, city, gender, profession }
          });
        } else {
          dispatch({
            type: REGISTER,
            payload: { msg }
          });
        }
      },
      err => {
        console.info(err);
      }
    );
}

export function abandon(payload) {
  const { userName, password } = payload;
  return dispatch => abandonAPI(userName, password).then(res => {}, err => {});
}
