import { ADD_CASHFLOW, GET_CASHFLOW } from 'actions/cashflow';

export default function cashflowReducer(state, action) {
  const { type, payload } = action;
  let rtn = { ...state };

  switch (type) {
    case ADD_CASHFLOW: {
      rtn = { ...rtn, cashflows: [...rtn.cashflows, ...payload] };
      break;
    }
    case GET_CASHFLOW: {
      rtn = { ...rtn, cashflows: [...payload] };
      break;
    }
    default: {
      break;
    }
  }

  return rtn;
}
