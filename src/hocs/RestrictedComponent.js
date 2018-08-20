import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default function getRestrictedComponent(
  authenticated,
  unRestrictedComponent
) {
  const MyComponent = unRestrictedComponent;

  return authenticated
    ? MyComponent
    : props => <Redirect to="/login" props={props} />;
}
