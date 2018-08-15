import { REGISTER, ABANDON } from "actions/register";

export default function registerReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER: {
      return { ...state, ...payload };
      break;
    }
    case ABANDON: {
      break;
    }
    default: {
      return state;
    }
  }
}
