import { takeLatest, put, call } from 'redux-saga/effects'
import { REQUEST_LOGIN, requestLoginSuccess, REQUEST_LOGOUT } from '../Actions/LoginActions'
import { signInAndRetrieveDataWithEmailAndPassword, logOut } from '../../Screens/Login/Utils/'
import * as NavigationService from '../../Navigation/NavigationService'
import { requestUserInfo } from '../Actions/UserActions';


function* requestLogin(action) {
  const { mail, password } = action.payload
  try {
    const response = yield call(signInAndRetrieveDataWithEmailAndPassword, mail, password)
    yield put(requestLoginSuccess(response._user))
    yield put(requestUserInfo('OTZ26J3pXIWW5YEnnL18Ordo82y2'))
    NavigationService.navigate('Home')
  }
  catch (err){
    console.log(err)
  }
}

function* requestLogout() {
  try {
    yield call(logOut)
    NavigationService.navigate('Login')
  }
  catch (err) {
    console.log(err)
  }
}

export default function* loginSaga() {
  yield takeLatest(REQUEST_LOGIN, requestLogin),
  yield takeLatest(REQUEST_LOGOUT, requestLogout)
}