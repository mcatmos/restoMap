export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const REQUEST_SEARCH_SUCCESS = 'REQUEST_SEARCH_SUCCESS'

export const requestSearch = (query) => {
  return {
    type: REQUEST_SEARCH,
    payload: query
  }
}

export const requestSearchSuccess = (response) => {
  return {
    type: REQUEST_SEARCH_SUCCESS,
    payload: response
  }
}