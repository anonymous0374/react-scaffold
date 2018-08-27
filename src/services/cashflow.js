import axios from 'axios';
import API_GET_CASHFLOW from 'configs/URIs';
import API_ADD_CASHFLOW_EVENT from 'configs/UIRs';

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
