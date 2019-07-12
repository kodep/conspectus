import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/auth';
import { sendLoginRequest } from '../../api/SignIn';

export function login(data) {
  return dispatch => {
    dispatch({ type: LOGIN_PENDING, payload: data})
    return sendLoginRequest(data)
      .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res}))
      .catch(err => {
        console.log('error', err)
        return dispatch({ type: LOGIN_ERROR, payload: err})

      })
 }
}

