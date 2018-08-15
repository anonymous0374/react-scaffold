import React from "react";
import Login from "components/Login";

export default function Auth(props) {
  const { msg } = props;
  return <Login msg={msg} />;
}
