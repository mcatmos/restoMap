export const getUserId = (state) => {
  return state.login.userId
}

export const getUserFollowers = (state) => {
  return state.login.user.followers
}