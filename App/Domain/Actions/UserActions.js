export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'

export const requestUserInfo = (userId) => {
  return {
    type: REQUEST_USER_INFO,
    payload: { userId }
  }
}