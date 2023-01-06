import { userService } from '../services';

export const userActionTypes = {
  AUTHENTICATION_SUCCESS: 'AUTHENTICATION_SUCCESS',
  AUTHENTICATION_FAIL: 'AUTHENTICATION_FAIL',
  LOGOUT: 'LOGOUT',
};

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  if (userService.login(username, password)) {
    const user = {
      username: 'test',
      displayName: 'Demo User',
      joinedDate: '2010-01-01',
    };

    return success(user);
  } else {
    const error = {
      errorCode: 1001,
      errorDesc: 'Either username or password is wrong.',
    };

    return failure(error);
  }

  function success(user) {
    return {
      type: userActionTypes.AUTHENTICATION_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return { type: userActionTypes.AUTHENTICATION_FAIL, error };
  }
}

function logout() {
  return {
    type: userActionTypes.LOGOUT,
  };
}
