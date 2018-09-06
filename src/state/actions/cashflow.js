import axios from 'axios';
import { getCashflow as getCashflowAPI, addCashflowEvent } from 'services/cashflow';

export const ADD_CASHFLOW = 'ADD_CASHFLOW';
export const GET_CASHFLOW = 'GET_CASHFLOW';

export function logCashflow(args) {
  return (dispatch) => {
    addCashflowEvent(args).then(
      (res) => {
        const {
          data: { code, msg },
        } = res;
        if (!isNaN(code) && code === 0) {
          dispatch({
            type: ADD_CASHFLOW,
            payload: { ...data },
          });
        } else {
          dispatch({
            type: ADD_CASHFLOW,
            payload: { code: -1, msg: 'Failed to log cashflow event.' },
          });
        }
      },
      err => dispatch({
        type: ADD_CASHFLOW,
        payload: { code: -1, msg: err },
      }),
    );
  };
}

export function getCashflow(dateRange) {
  return (dispatch) => {
    getCashflowAPI(dateRange).then(
      (res) => {
        const {
          data,
          data: { code, history, ...rest },
        } = res;
        if (!isNaN(code) && code === 0) {
          const cashflow = Object.keys(rest).map(key => data[key]);
          dispatch({
            type: GET_CASHFLOW,
            payload: { cashflow, history },
          });
        } else {
          dispatch({
            type: GET_CASHFLOW,
            payload: { code: -1, msg: 'Failed to get cashflow.' },
          });
        }
      },
      (err) => {
        dispatch({
          type: GET_CASHFLOW,
          payload: { code: -1, msg: err },
        });
      },
    );
  };
}
