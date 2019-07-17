import React, { Fragment, PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { Layout } from './components/Layout';
import MyMitting from '../MyMitting';

export class Dashboard extends PureComponent {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/my-mitting" component={MyMitting} />
          <Redirect from="/" to="/my-mitting" />
        </Switch>
      </Fragment>
    );
  }
}

export default Dashboard;
