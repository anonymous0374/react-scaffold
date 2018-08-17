import { getAssets as getAssetsAPI } from "services/assets";

export const ADD_ASSET = "ADD_ASSET";
export const UPDATE_ASSET = "UPDATE_ASSET";
export const GET_ASSETS = "GET_ASSETS";
export const REMOVE_ASSETS = "REMOVE_ASSETS";

export function add(payload) {
  return {
    type: ADD_ASSET,
    payload
  };
}

export function update(payload) {
  return {
    type: UPDATE_ASSET,
    payload
  };
}

export function getAssets(payload) {
  return dispatch => {
    getAssetsAPI(payload).then(
      res => {
        const {
          data: { code, msg },
          data = {}
        } = res;
        console.info("getAssets, res:", res);
        if (!isNaN(code) && code === 0) {
          dispatch({
            type: GET_ASSETS,
            payload: res
          });
        }
      },
      err => {}
    );
  };
}

export function removeAssets(payload) {
  return {
    type: REMOVE_ASSETS,
    payload
  };
}
