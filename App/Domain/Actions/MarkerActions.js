export const ADD_MARKER = 'ADD_MARKER'
export const ADD_MARKERS = 'ADD_MARKERS'
export const ADD_NEW_MARKER = 'ADD_NEW_MARKER'

export const addMarker = (data) => {
  return {
    type: ADD_MARKER,
    payload: data
  }
}

export const addNewMarker = (data) => {
  return {
    type: ADD_NEW_MARKER,
    payload: data
  }
}