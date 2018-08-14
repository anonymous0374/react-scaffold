import { LOGIN, LOGOUT } from "actions/auth";
import { initialState } from "models/store";

export default function authReducer(state = { ...initialState.auth }, action) {
  const rtn = { ...state };
  switch (action.type) {
    case LOGIN: {
      return { ...state, ...action.payload };
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
