import { LOGIN, LOGOUT } from "actions/auth";
import { initialState } from "models/store";

export default function authReducer(state, action) {
  let rtn = { ...state };
  switch (action.type) {
    case LOGIN: {
      const {
        name,
        email,
        city,
        gender,
        profession,
        authenticated
      } = action.payload;
      rtn = {
        ...state,
        name,
        email,
        city,
        gender,
        profession,
        authenticated
      };
      break;
    }
    case LOGOUT: {
      rtn = { ...state, ...action.payload };
      break;
    }
    default: {
      // do nothing
    }
  }
  return rtn;
}
