/**
 * This function takes in a component, and returns another component
 * depends on the authenticated argument.
 *
 * If authenticated is false, return <Redirect to='/login />, otherwise,
 * return the in-take component as it is.
 *
 * Note that either case, the returned component is in a Functional form.
 */

import React from "react";
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
