export const getFollowingMarkers = (state) => {
  return state.users.length ? state.users : []
}