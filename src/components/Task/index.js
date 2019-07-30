import React, { Fragment, PureComponent } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import NewTaskForm from '../../scenes/MyMeeting/NewTaskForm'
import { createTaskDescription } from '../../redux/actions/tasks'
import { Wrapper, CheckboxWrapper, CommentForm, Comment, DeleteIcon } from './styles';

class Task extends PureComponent {
  state = {
    isChecked: false,
    isClicked: false
  }

  get checkboxStatus() {
    return this.state.isChecked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
  }

  handleCheckboxCheck = () => this.setState({ isChecked: !this.state.isChecked })

  handleAddComment = () => this.setState({ isClicked: !this.state.isClicked})

  handleCreationComment = data => {
    const { onCreateTaskDescription, id } = this.props
    onCreateTaskDescription({id, ...data})
    this.handleAddComment()
  }

  hadleconsole = () => {
    console.log('lolkekcheburek')
  }

    render() {
      const { task, id } = this.props
      const { isClicked, isChecked } = this.state
      return(
        <Fragment>
          <Wrapper>
            <CheckboxWrapper>
              <Checkbox onClick={this.handleCheckboxCheck}/>
              <p onClick={this.handleAddComment} style={this.checkboxStatus}>{task.taskName}</p>
            </CheckboxWrapper>
            <DeleteIcon onClick={this.hadleconsole} icon={faTrash} aria-hidden="true" style={this.disabledButton}/>
          </Wrapper>
          <CommentForm>
            { (isClicked && !isChecked) && (
                <NewTaskForm name={`task-comment-${id}`} placeholder="Task description" onSubmit={this.handleCreationComment} />
              )
            }
          </CommentForm>
          <Comment>
            { task.comment || null }
          </Comment>
        </Fragment>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateTaskDescription: data => dispatch(createTaskDescription(data))
  }
}

export default connect(null, mapDispatchToProps)(Task)
