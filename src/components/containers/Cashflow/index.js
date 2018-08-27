import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cashflow from 'presentationals/Cashflow';
import Header from 'containers/Header';
import { logCashflow, getCashflow } from 'actions/cashflow';

class CashflowContainer extends Component {
  componentDidMount() {
    const {
      props: { get },
    } = this;
    get();
  }

  render() {
    const { props } = this;
    return (
      <div>
        <Header />
        <Cashflow {...props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    cashflows: state.cashflows,
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
)(CashflowContainer);
