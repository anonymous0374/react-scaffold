export const ADD_CASHFLOW = 'ADD_CASHFLOW';
export const GET_CASHFLOW = 'GET_CASHFLOW';

export default function CashflowReducer(state, action) {
  const { type, payload } = action;
  let rtn = { ...state };
  switch (type) {
    case ADD_CASHFLOW: {
      rtn = { ...rtn, cashflows: [...rtn.cashflows, payload] };
      break;
    }
    case GET_CASHFLOW: {
      rtn = { ...rtn, cashflows: [...payload] };
    }
    default: {
      // do nothing here
    }
  }

  return rtn;
}
