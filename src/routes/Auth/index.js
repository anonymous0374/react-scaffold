import React from "react";
import Login from "components/Login";
import { withRouter } from "react-router-dom";
import { store } from "models/store";

// export default class Auth extends React.Component {
//   render() {
//     const Wlogin = withRouter(Login);
//     return <Wlogin store={store} />;
//   }
// }

export default function Auth() {
  const Wlogin = withRouter(Login);
  return <Wlogin store={store} />;
}
