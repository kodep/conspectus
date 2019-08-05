import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginPage from '../../components/loginPage';
import MyMeeting from '../../scenes/MyMeeting';
import AuthorizedRoute from '../../components/AuthorizedRoute'

const history = createBrowserHistory();

class Navigation extends PureComponent {
  render() {
    const { user } = this.props
    return (
      <Router history={history}>
        <Route exact path="/" component={LoginPage}/>
        <AuthorizedRoute isLoggedIn={user.email} path="/my-meeting" component={MyMeeting} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Navigation);

