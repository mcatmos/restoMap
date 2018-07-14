import { takeLatest, put, call } from 'redux-saga/effects'
import { REQUEST_USER_INFO } from '../Actions/UserActions'
import { addMarker } from '../Actions/MarkerActions'
import { getUserObject, getUserPlaces } from '../../Utils/Firebase/Database'

function* requestUserInfo(action) {
  const { userId } = action.payload
  try {
    const response = yield call(getUserObject, userId)
    const places = yield call(getUserPlaces, response.markers)
    for (let place of places) {
      yield put(addMarker(place))
    }
  }
  catch (err){
    console.log(err)
  }
}

export default function* UserSaga() {
  yield takeLatest(REQUEST_USER_INFO, requestUserInfo)
}