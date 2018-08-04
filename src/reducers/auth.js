import { LOGIN, LOGOUT } from "actions/auth";
import { initialState } from "models/store";

export default function authReducer(state = { ...initialState.auth }, action) {
  let rtn = { ...state };
  if (action.type === LOGIN) {
    rtn = { ...state, ...action.payload, login: true };
  } else if (action.type === LOGOUT) {
    rtn = { ...state, login: false };
  }

  return rtn;
}
