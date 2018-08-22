import { LOGIN, LOGOUT, GET_USER } from "actions/auth";
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
        authenticated,
        msg
      } = action.payload;
      rtn = {
        ...state,
        name,
        email,
        city,
        gender,
        profession,
        authenticated,
        msg
      };
      break;
    }
    case LOGOUT:
    case GET_USER: {
      console.info("state: ", state);
      rtn = { ...state, ...action.payload };
      break;
    }
    default: {
      // do nothing
    }
  }
  return rtn;
}
