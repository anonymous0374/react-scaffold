export const ADD_CASHFLOW = 'ADD_CASHFLOW';

export default function (state, action) {
  const { type, payload } = action;
  let rtn = { ...state };
  switch (type) {
    case ADD_CASHFLOW: {
      rtn = { ...rtn, cashflows: [...rtn.cashflows, payload] };
      break;
    }
    default: {
      // do nothing here
    }
  }

  return rtn;
}
