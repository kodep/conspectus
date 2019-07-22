import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

class MyMeeting extends PureComponent {
  handleSignOut = () => {
    const { logoutAction } = this.props
    return logoutAction()
  }

  render() {
    return (
      <Fragment>
        <header>Conspectus</header>
          <p>Hi, Test</p>
          <button onClick={this.handleSignOut}>Sign out</button>
          <p>Next meeting: data</p>
            <div>
              <span>задача </span>
              <span>delete icon</span>
              <br/>
              <input></input>
              <br/>
              <button>Complete</button>
            </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(MyMeeting);
