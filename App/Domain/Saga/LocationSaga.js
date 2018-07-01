import { channel } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects'

export const locationChannel = channel()

import {
  LOCATION_ACTION_SET_POSITION,
  LOCATION_ACTION_SET_ERROR,
  LOCATION_ACTION_REQUEST
} from '../Actions/LocationActions'

export function* watchLocationChannel() {
  while (true) {
    const action = yield take(locationChannel)
    yield put(action)
  }
}

export function* getCurrentPosition(options) {
  locationChannel.put({ type: LOCATION_ACTION_REQUEST })
  navigator.geolocation.getCurrentPosition(
    position => {
      locationChannel.put({ type: LOCATION_ACTION_SET_POSITION, position })
    },
    (error) => locationChannel.put({ type: LOCATION_ACTION_SET_ERROR, error }),
    options
  )
}

export function* watchCurrentPosition(options) {
  locationChannel.put({ type: LOCATION_ACTION_REQUEST })
  navigator.geolocation.watchPosition(
    position => {
      locationChannel.put({type: LOCATION_ACTION_SET_POSITION, position })
    },
    (error) => locationChannel.put({type: LOCATION_ACTION_SET_ERROR, error }),
    options
  )
}