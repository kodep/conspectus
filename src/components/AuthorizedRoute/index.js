import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

class AuthorizedRoute extends Component {
  get redirectLocation() {
    const { location } = this.props;
    return {
      pathname: '/',
      state: { from: location }
    };
  }

  render() {
    const { component: Component, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => isLoggedIn ? <Component {...props} /> : <Redirect to={this.redirectLocation} />}
      />
    );
  }
}

export default AuthorizedRoute;
