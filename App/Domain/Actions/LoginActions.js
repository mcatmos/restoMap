export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const REQUEST_LOGOUT_SUCCESS = 'REQUEST_LOGOUT_SUCCESS'

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

export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})

export const requestLogoutSuccess = () => ({
  type: REQUEST_LOGOUT_SUCCESS
})