import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects'
import { 
  REQUEST_SEARCH,
  REQUEST_AUTOCOMPLETE_SEARCH, 
  requestSearchSuccess,
  requestAutocompleteSearchSuccess
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
  } catch (e) {
     console.log(e)
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
  } catch (e) {
    console.log(e)
  }
}

export default function* searchSaga(APIService) {
  yield takeEvery(REQUEST_AUTOCOMPLETE_SEARCH, requestAutocompleteSearch, APIService),
  yield takeEvery(REQUEST_SEARCH, requestSearch, APIService)
}