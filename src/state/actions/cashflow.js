import axios from 'axios';
import { API_ADD_CASHFLOW_EVENT } from 'configs/URIs';

export function logCashflow(data) {
  return axios.post(API_ADD_CASHFLOW_EVENT, {
    params: data,
  });
}

export function placeHolder() {}
