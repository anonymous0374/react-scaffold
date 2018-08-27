import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cashflow from 'presentationals/Cashflow';
import { logCashflow, getCashflow } from 'actions/cashflow';

class CashflowContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getCashflow();
  }

  render() {
    return <Cashflow />;
  }
}

function mapStateToProps(State) {
  return {
    cashflows: State.cashflows,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    log: cashflowEvent => dispatch(logCashflow(cashflowEvent)),
    get: dateRange => dispatch(getCashflow(dateRange)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cashflow);
