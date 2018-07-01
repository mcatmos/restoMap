export const getCurrentLocation = (state) => {
  if (state.location.position) {
    return state.location.position.coords
  }
}