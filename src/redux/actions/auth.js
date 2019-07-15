import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/auth';
import { sendLoginRequest } from '../../api/SignIn';

export function login(data) {
  return dispatch => {
    dispatch({ type: LOGIN_PENDING })
    return sendLoginRequest(data)
      .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res}))
      .catch(err => dispatch({ type: LOGIN_ERROR, payload: err})
      )
 }
}

