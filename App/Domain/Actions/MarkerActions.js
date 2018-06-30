export const ADD_MARKER = 'ADD_MARKER'

export const addMarker = (data) => {
  return {
    type: ADD_MARKER,
    payload: data
  }
}