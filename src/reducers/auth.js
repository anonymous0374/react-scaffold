import { LOGIN, LOGOUT } from "actions/auth";
import { initialState } from "models/store";
import axios from "axios";

export default function authReducer(state = { ...initialState.auth }, action) {
  const rtn = { ...state };
  switch (action.type) {
    case LOGIN: {
      return (dispatch, getState) =>
        getUserByName(action.username).then(
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
  axios.get("/user", {
    params: {
      name
    }
  });
}
