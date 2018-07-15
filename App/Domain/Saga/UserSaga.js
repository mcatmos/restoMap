import { takeLatest, put, call, select } from 'redux-saga/effects'
import _ from 'lodash'
import { REQUEST_USER_INFO, requestUserInfoSuccess, REQUEST_USER_FOLLOWERS, REQUEST_USER_INFO_SUCCESS, requestUserFollowersSuccess } from '../Actions/UserActions'
import { addMarker, ADD_MARKERS } from '../Actions/MarkerActions'
import { batchActions } from 'redux-batched-actions'
import { getUserObject, getUserPlaces, getUserFollow } from '../../Utils/Firebase/Database'
import { getUserFollowers } from '../Selectors/User';

function* requestUserInfo(action) {
  const { userId } = action.payload
  try {
    const response = yield call(getUserObject, userId)
    yield put(requestUserInfoSuccess(response))
    const places = yield call(getUserPlaces, response.markers)
    const actions = places.map(item => addMarker(item))
    yield put(batchActions(actions, ADD_MARKERS))
  }
  catch (err){
    console.log(err)
  }
}

function* requestFollowersInfo() {
  const followerIds = yield select(getUserFollowers)
  const followers = yield call(getUserFollow, followerIds)

  const objectFollowers = followers.reduce((result, item) => {
    var key = item.uid
    result[key] = item
    return result
    }, {})

  yield put(requestUserFollowersSuccess(objectFollowers))
}

export default function* UserSaga() {
  yield takeLatest(REQUEST_USER_INFO, requestUserInfo)
}