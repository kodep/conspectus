import { TASK_CREATION_SUCCESS, TASK_DESCRIPTION_CREATION_SUCCESS, TASK_DELETE } from '../constants/tasks';
import { createTask as createTaskRequest } from '../../api/tasks';

export function createTask(data) {
  return dispatch => createTaskRequest(data).then(res => dispatch({ type: TASK_CREATION_SUCCESS, payload: res}))
};

export function createTaskDescription(data) {
  return dispatch => dispatch({ type: TASK_DESCRIPTION_CREATION_SUCCESS, payload: data})
}

export function deleteTask(id) {
  return dispatch => dispatch({ type: TASK_DELETE, payload: id })
}
