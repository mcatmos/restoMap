import { takeLatest, put, call, select } from 'redux-saga/effects'
import { setUserPlace } from '../../Utils/Firebase/Database'
import { ADD_NEW_MARKER } from '../Actions/MarkerActions'
import { getUserId } from '../Selectors/User'

function* setMarkerPlace(action) {
  try {
    const userId = yield select(getUserId)
    yield call(setUserPlace, action.payload, userId)
  }
  catch (err){
    console.log(err)
  }
}

export default function* MarkerSaga() {
  yield takeLatest(ADD_NEW_MARKER, setMarkerPlace)
}