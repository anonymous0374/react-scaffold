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
  return {
    type: GET_ASSETS,
    payload
  };
}

export function removeAssets(payload) {
  return {
    type: REMOVE_ASSETS,
    payload
  };
}
