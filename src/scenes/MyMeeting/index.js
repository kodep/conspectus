import React, { Fragment, PureComponent } from 'react';

class MyMeeting extends PureComponent {
  render() {
    return (
      <Fragment>
        <header>Conspectus</header>
          <p>Hi, Test</p>
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

export default MyMeeting;
