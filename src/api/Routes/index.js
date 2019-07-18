import React, { PureComponent } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginPage from '../../components/loginPage';
import MyMeeting from '../../scenes/MyMeeting';
import { connect } from 'react-redux'
import AuthorizedRoute from '../../components/AuthorizedRoute'

const history = createBrowserHistory();

class Navigation extends PureComponent {
  render() {
    const { userEmail } = this.props
    return (
      <Router history={history}>
        <Route exact path="/" component={LoginPage}/>
        <AuthorizedRoute isLoggedIn={userEmail} path="/my-meeting" component={MyMeeting} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  userEmail: state.auth.user.email
})

export default connect(mapStateToProps)(Navigation);

