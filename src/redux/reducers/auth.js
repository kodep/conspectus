import { LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_ERROR } from '../constants/auth';

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null
};

export default function auth(state = initialState, action) {

  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loginError: null, isLoginPending: true };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload, isLoginPending: false };

    case LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: true, isLoginPending: false }

    default:
      return state;
  }
}
