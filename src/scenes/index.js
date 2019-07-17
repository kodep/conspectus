import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import AuthorizedRoute from 'containers/AuthorizedRoute';
import Dashboard from 'scenes/Dashboard';
import Signin from 'scenes/Signin';

export default class Application extends PureComponent {
  render() {
    return (
        <Switch>
          <Route path="/signin" component={Signin} />
          <AuthorizedRoute path="/" component={Dashboard} />
        </Switch>
    );
  }
}
