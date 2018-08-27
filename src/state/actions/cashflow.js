import axios from 'axios';
import { API_ADD_CASHFLOW_EVENT, API_GET_CASHFLOW } from 'configs/URIs';

export function logCashflow(data) {
  return axios.post(API_ADD_CASHFLOW_EVENT, {
    params: data,
  });
}

export function getCashflow(dataRange) {
  return axios.post(API_GET_CASHFLOW, { params: dataRange });
}
