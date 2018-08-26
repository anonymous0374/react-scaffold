import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout } from 'actions/auth';
import { logCashflow as log } from 'actions/cashflow';
import Header from 'presentationals/Header';
import FlowEventLogger from 'presentationals/FlowEventLogger';

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: credentials => dispatch(login(credentials)),
  log: data => dispatch(log(data)),
});

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    // state is solely used for internal state(frame) management,
    // therefore, it is NOT connected to model via redux connect.
    this.state = {
      visible: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.info('nextProps: ', nextProps, ', nextState: ', nextState);
    return true;
  }

  componentDidUpdate() {
    console.info('current state: ', this.state);
  }

  toggleModal = () => {
    const {
      state: { visible },
    } = this;
    if (visible) {
      this.setState(() => ({ visible: false }));
      return;
    }
    this.setState(() => ({ visible: true }));
  };

  render() {
    const {
      state: { visible },
      props,
    } = this;
    return (
      <Fragment>
        <Header {...props} toggleModal={this.toggleModal} />
        <FlowEventLogger visible={visible} log={log} toggleModal={this.toggleModal} />
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HeaderContainer),
);
