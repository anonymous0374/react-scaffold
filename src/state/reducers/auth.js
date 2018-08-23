/**
 * authReducer updates two slices of the app state: auth, and user.
 * Therefore:
 * 1. argument action.payload contains two slices: auth and user.
 * 2. the object authReducer returns contains two slices: auth and user.
 * 3. while the state passed into authReducer is still one slice: auth.
 */
import { LOGIN, LOGOUT, GET_USER } from 'actions/auth';

export default function authReducer(state, action) {
  let rtn = { ...state };
  switch (action.type) {
    case LOGOUT:
    case LOGIN:
    case GET_USER: {
      rtn = { ...state, ...action.payload };
      break;
    }
    default: {
      // do nothing
    }
  }
  return rtn;
}
