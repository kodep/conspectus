import { LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_ERROR, SIGN_OUT } from '../constants/auth';

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null,
  user: {
    email: ''
  }
};

export default function auth(state = initialState, action) {

  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loginError: null, isLoginPending: true };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload, isLoginPending: false };

    case LOGIN_SUCCESS:
      return { ...state, user: action.payload.user,  isLoginSuccess: action.payload, isLoginPending: false }

    case SIGN_OUT:
      return initialState

    default:
      return state;
  }
}
