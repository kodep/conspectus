import { TASK_CREATION_SUCCESS, TASK_DESCRIPTION_CREATION_SUCCESS, TASK_DELETE } from '../constants/tasks';

const initialState = []

export default function task(state = initialState, action) {
  switch (action.type) {
    case TASK_CREATION_SUCCESS:
      console.log('hello', action.payload)
      return [ ...state, { ...action.payload, comment: '' } ];
    case TASK_DESCRIPTION_CREATION_SUCCESS:
      return buildTasks(state, action.payload)
    case TASK_DELETE:
      return [ ...state, action.filter()]
    default:
      return state;
  }
}

function buildTasks(state, payload) {
  const findTaskById = () => state.find(task => task.id === payload['id'])
  const taskPosition = state.indexOf(findTaskById())
  state[taskPosition].comment = payload[`task-comment-${payload.id}`]
  return state
}
