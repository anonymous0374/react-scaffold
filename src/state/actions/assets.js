import { getAssets as getAssetsAPI } from 'services/assets';
import {
  SUCCESS, ERROR, NOT_FOUNT, NO_ACCESS, NOT_LOGIN,
} from 'configs/codes';

export const ADD_ASSET = 'ADD_ASSET';
export const UPDATE_ASSET = 'UPDATE_ASSET';
export const GET_ASSETS = 'GET_ASSETS';
export const REMOVE_ASSETS = 'REMOVE_ASSETS';
export const GOTO_LOGIN = 'GOTO_LOGIN';

export function add(payload) {
  return {
    type: ADD_ASSET,
    payload,
  };
}

export function update(payload) {
  return {
    type: UPDATE_ASSET,
    payload,
  };
}

export function getAssets(payload) {
  return (dispatch) => {
    getAssetsAPI(payload).then(
      (res) => {
        const {
          data: {
            code, msg, history, ...rest
          },
        } = res;
        if (!isNaN(code) && code === SUCCESS) {
          dispatch({
            type: GET_ASSETS,
            payload: {
              data: rest,
              history,
            },
          });
        } else if (!isNaN(code) && code === NOT_LOGIN) {
          dispatch({
            type: GOTO_LOGIN,
          });
        }
      },
      (err) => {},
    );
  };
}

export function removeAssets(payload) {
  return {
    type: REMOVE_ASSETS,
    payload,
  };
}
