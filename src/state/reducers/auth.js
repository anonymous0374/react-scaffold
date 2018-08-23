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
    case LOGIN: {
      const {
        name, email, city, gender, profession, authenticated, msg,
      } = action.payload;
      rtn = {
        ...state,
        auth: {
          authenticated,
          name,
        },
        user: {
          name,
          email,
          city,
          gender,
          profession,
        },
        msg,
      };
      break;
    }
    case LOGOUT:
    case GET_USER: {
      console.info('merged state: ', { ...state, ...action.payload });
      rtn = { ...state, ...action.payload };
      break;
    }
    default: {
      // do nothing
    }
  }
  return rtn;
}
