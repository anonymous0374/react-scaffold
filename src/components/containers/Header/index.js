import { connect } from 'react-redux';
import { login, logout } from 'actions/auth';
import Header from 'presentationals/Header';

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: credentials => dispatch(login(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
