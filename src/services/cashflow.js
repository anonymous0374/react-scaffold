import axios from 'axios';
import { API_GET_CASHFLOW, API_ADD_CASHFLOW_EVENT } from 'configs/URIs';

export function getCashflow(dateRange) {
  return axios.get(API_GET_CASHFLOW, {
    params: dateRange,
  });
}

export function addCashflowEvent(event) {
  return axios.post(API_ADD_CASHFLOW_EVENT, {
    params: event,
  });
}
