import {
  ADD_ASSET, UPDATE_ASSET, REMOVE_ASSET, GET_ASSETS, GOTO_LOGIN,
} from 'actions/assets';

export default function assetsReducer(state, action) {
  let rtn = { ...state };
  const { type, payload } = action;
  switch (type) {
    case ADD_ASSET: {
      rtn = [...rtn, payload];
      break;
    }
    case UPDATE_ASSET: {
      rtn = rtn.map((item) => {
        if (item.name === payload.name) {
          return payload;
        }
        return item;
      });
      break;
    }
    case REMOVE_ASSET: {
      const index = rtn.findIndex((element, i) => {
        if (element.name === payload.name) {
          return i;
        }
      });

      rtn = rtn.splice(index, 1);
      break;
    }
    case GET_ASSETS: {
      break;
    }
    case GOTO_LOGIN: {
      rtn = { ...rtn, auth: { authenticated: false } };
      break;
    }
    default:
      break;
  }

  return rtn;
}
