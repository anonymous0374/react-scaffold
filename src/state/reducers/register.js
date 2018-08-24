import { REGISTER, ABANDON } from 'actions/register';

export default function registerReducer(state, action) {
  const { type, payload } = action;
  let rtn = { ...state };
  switch (type) {
    case REGISTER:
    case ABANDON: {
      rtn = { ...state, ...payload };
      break;
    }
    default: {
      // do nothing
    }
  }

  return rtn;
}
