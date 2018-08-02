import { LOGIN, LOGOUT } from "actions/auth";

export default function authReducer(state = {}, action) {
  let rtn = {};
  if (action.type === LOGIN) {
    const { type, ...rest } = action;
    rtn = { ...state, ...rest, login: true };
  } else if (action.type === LOGOUT) {
    rtn = { login: false };
  } else {
    rtn = state;
  }

  return rtn;
}
