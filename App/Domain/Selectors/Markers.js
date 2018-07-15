export const getFollowingMarkers = (state) => {
  return state.users.length ? state.users : []
}
export const getUserMarkers = (state) => {
  return Object.values(state.markers)
}