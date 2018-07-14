import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects'
import { 
  REQUEST_SEARCH,
  REQUEST_AUTOCOMPLETE_SEARCH, 
  requestSearchSuccess,
  requestAutocompleteSearchSuccess,
  REQUEST_SEARCH_DETAILS,
  requestSearchDetailsSuccess
} from '../Actions/SearchActions'
import { showResultCards } from '../Actions/UIActions'

function* requestSearch(APIService, action) {
  try {
     const response = yield call(APIService.searchPlace, action.payload)
     if (response.ok) {
       const { data } = response
       yield put(requestSearchSuccess(data.candidates))
       yield put(showResultCards())
     }
  } catch (err) {
     console.log(err)
  }
}

function* requestAutocompleteSearch(APIService, action) {
  try {
    const response = yield call(APIService.autocompletePlace, action.payload)
    if (response.ok) {
      const { data } = response
      yield put(requestAutocompleteSearchSuccess(data.predictions))
      //yield put(showResultCards())
    }
  } catch (err) {
    console.log(err)
  }
}

function* requestSearchDetails(APIService, action) {
  try {
    const response = yield call(APIService.getPlaceDetails, action.payload)
    if (response.ok) {
      const { data } = response
      yield put(requestSearchDetailsSuccess(data.result))
    }
  } catch (err) {
    console.log(err)
  }
}

export default function* searchSaga(APIService) {
  yield takeEvery(REQUEST_AUTOCOMPLETE_SEARCH, requestAutocompleteSearch, APIService),
  yield takeEvery(REQUEST_SEARCH, requestSearch, APIService),
  yield takeEvery(REQUEST_SEARCH_DETAILS, requestSearchDetails, APIService)
}