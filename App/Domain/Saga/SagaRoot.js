import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import API from '../../Utils/API'
import { REQUEST_SEARCH, requestSearchSuccess } from '../Actions/SearchActions'
import { showResultCards } from '../Actions/UIActions'

const APIService = API.createAPI()

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

function* sagaRoot() {
 yield takeEvery(REQUEST_SEARCH, requestSearch, APIService);
}

export default sagaRoot