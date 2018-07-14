import { takeLatest, put, call } from 'redux-saga/effects'
import { setUserPlace } from '../../Utils/Firebase/Database'
import { ADD_NEW_MARKER } from '../Actions/MarkerActions'

function* setMarkerPlace(action) {
  console.log(action)
  try {
    yield call(setUserPlace, action.payload)
  }
  catch (err){
    console.log(err)
  }
}

export default function* MarkerSaga() {
  yield takeLatest(ADD_NEW_MARKER, setMarkerPlace)
}