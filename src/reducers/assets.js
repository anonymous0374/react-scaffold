import {
  ADD_ASSET,
  UPDATE_ASSET,
  REMOVE_ASSET,
  GET_ASSETS
} from "actions/assets";

export default function assetsReducer(
  state = [
    {
      key: 0,
      name: "real estate 1",
      location: "Jiaxing",
      description: "Fu Sheng Min Di",
      price: 1270000
    },
    {
      key: 1,
      name: "real estate 2",
      location: "Ezhou",
      description: "Zhulin Square",
      price: 550000
    }
  ],
  action
) {
  let rtn = { ...state };
  const { payload } = action;
  switch (action.type) {
    case ADD_ASSET: {
      rtn = [...rtn, payload];
      break;
    }
    case UPDATE_ASSET: {
      rtn = rtn.map(item => {
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
      const res = rtn.filter(item => item.indexOf(payload) > -1);
      rtn = [...res];
      break;
    }
    default:
      break;
  }
  return rtn;
}
