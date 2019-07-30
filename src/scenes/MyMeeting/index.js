import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { CalendarContainer, Header, HeaderContainer, HeaderAction, DatePicker, Body, Logo, Img, HeaderLabel, TasksList, ActionButton } from './styles'
class MyMeeting extends PureComponent {

  state = {
    day: this.nextMeetingDay
  }

  get nextMeetingDay() {
    return moment().day() === 1 ? new Date() : new Date(moment().add(1, 'weeks').startOf('isoWeek'))
  };

  get nextTextDay() {
    return moment().day() === 1 ? 'Today' : 'Next'
  };

  handleSignOut = () => {
    const { logoutAction } = this.props
    return logoutAction()
  }

  handleChange = date => this.setState({day: date})

  render() {
    return (
      <Fragment>
        <Header>
          <Logo>
            <Img src="https://cdn4.iconfinder.com/data/icons/system-ui-set/512/modern-latin-alphabet-letter-c-512.png"/>
            <HeaderLabel>
              Conspectus
            </HeaderLabel>
          </Logo>
          <HeaderContainer>
            <p>Hi, Test</p>
            <HeaderAction icon={faTimes} aria-hidden="true" onClick={this.handleSignOut}/>
          </HeaderContainer>
        </Header>
        <Body>
          <CalendarContainer>
            {this.nextTextDay} meeting is:
            <DatePicker dateFormat="dd.MM.yyyy" selected={this.state.day} onChange={this.handleChange}/>
          </CalendarContainer>
          <hr/>
          <TasksList>
            <span>задача </span>
            <span>delete icon</span>
            <br/>
            <input></input>
            <br/>
            <ActionButton>Complete meeting</ActionButton>
          </TasksList>
        </Body>
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
