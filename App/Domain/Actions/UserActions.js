export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
export const REQUEST_USER_INFO_SUCCESS = 'REQUEST_USER_INFO_SUCCESS'
export const REQUEST_USER_FOLLOWERS = 'REQUEST_USER_FOLLOWERS'
export const REQUEST_USER_FOLLOWERS_SUCCESS = 'REQUEST_FOLLOWING_USERS_SUCCESS'

export const requestUserInfo = (userId) => {
  return {
    type: REQUEST_USER_INFO,
    payload: { userId }
  }
}

export const requestUserInfoSuccess = (data) => {
  return {
    type: REQUEST_USER_INFO_SUCCESS,
    payload: data
  }
}

export const requestUserFollowers = () => ({
  type: REQUEST_USER_FOLLOWERS
})

export const requestUserFollowersSuccess = (response) => ({
  type: REQUEST_USER_FOLLOWERS_SUCCESS,
  payload: response
})