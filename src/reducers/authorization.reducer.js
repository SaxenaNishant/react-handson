import { userActionTypes } from '../actions';

const initialState = {
  isAuthorized: false,
  user: null,
  error: null,
};

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.AUTHENTICATION_SUCCESS:
      return { isAuthorized: true, user: action.user, error: null };
    case userActionTypes.AUTHENTICATION_FAIL:
      return { isAuthorized: true, error: action.error, user: null };
    default:
      return state;
  }
}
