import { REGISTER, ABANDON } from 'actions/register';

export default function registerReducer(state, action) {
  const { type, payload } = action;
  let rtn = { ...state };
  switch (type) {
    case REGISTER: {
      rtn = { ...state, ...payload };
      break;
    }
    case ABANDON: {
      rtn = { ...state };
      break;
    }
    default: {
      // do nothing
    }
  }

  return rtn;
}
