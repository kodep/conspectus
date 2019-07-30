import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import NewTaskForm from './NewTaskForm';
import { createTask, deleteTask } from '../../redux/actions/tasks'
import Task from '../../components/Task';
import "react-datepicker/dist/react-datepicker.css";
import { CalendarContainer, Header, HeaderContainer, HeaderAction, DatePicker, Body, Logo, Img, HeaderLabel, TasksList, ActionButton, Kek } from './styles'
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

  handleNewTaskCreation = data => this.props.onCreateTask(data)

  handleDeleteTask = id => this.props.onDeletetask(id)

  render() {
    const { tasks, user } = this.props
    console.log('sadas', this.props)
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
            <p>Hi, {user.username}</p>
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
            { tasks && tasks.map(task => <Task key={task.id} task={task} id={task.id} />)}
            <NewTaskForm name="New meeting" placeholder="New task..." onSubmit={this.handleNewTaskCreation} />
          </TasksList>
          <Kek>
            <ActionButton>Complete meeting</ActionButton>
          </Kek>
        </Body>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch(logout()),
    onCreateTask: data => dispatch(createTask(data)),
    onDeletetask: id => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMeeting);
