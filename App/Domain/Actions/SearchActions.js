export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const REQUEST_SEARCH_SUCCESS = 'REQUEST_SEARCH_SUCCESS'
export const REQUEST_AUTOCOMPLETE_SEARCH = 'REQUEST_AUTOCOMPLETE_SEARCH'
export const REQUEST_AUTOCOMPLETE_SEARCH_SUCCESS = 'REQUEST_AUTOCOMPLETE_SEARCH_SUCCESS'
export const RESET_AUTOCOMPLETE_SEARCH = 'RESET_AUTOCOMPLETE_SEARCH'

export const requestSearch = (query, location) => {
  return {
    type: REQUEST_SEARCH,
    payload: {
      query,
      location
    }
  }
}

export const requestSearchSuccess = (response) => {
  return {
    type: REQUEST_SEARCH_SUCCESS,
    payload: response
  }
}

export const requestAutocompleteSearch = (query, location) => {
  return {
    type: REQUEST_AUTOCOMPLETE_SEARCH,
    payload: {
      query,
      location
    }
  }
}

export const requestAutocompleteSearchSuccess = (response) => {
  return {
    type: REQUEST_AUTOCOMPLETE_SEARCH_SUCCESS,
    payload: response
  }
}

export const resetAutocompleteSearch = () => {
  return {
    type: RESET_AUTOCOMPLETE_SEARCH
  }
}

