export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'

export const requestLogin = (mail, password) => {
  return {
    type: REQUEST_LOGIN,
    payload: {
      mail,
      password
    }
  }
}

export const requestLoginSuccess = (user) => {
  return {
    type: REQUEST_LOGIN_SUCCESS,
    payload: user
  }
}