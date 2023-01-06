export const userService = {
  login,
};

function login(username, password) {
  return username.test(/test/i) && password === 'test';
}
