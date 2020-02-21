/** @format */

export const setUser = user => {
  console.log('set user to: ', user.name);
  return {
    type: 'USER_SET',
    payload: user
  };
};
