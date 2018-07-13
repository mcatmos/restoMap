import { takeLatest, put, call } from 'redux-saga/effects'
import { REQUEST_LOGIN, requestLoginSuccess } from '../Actions/LoginActions'
import { signInAndRetrieveDataWithEmailAndPassword } from '../../Screens/Login/Utils/'
import { NavigationActions } from 'react-navigation';


function* requestLogin(action) {
  const { mail, password } = action.payload
  try {
    const response = yield call(signInAndRetrieveDataWithEmailAndPassword, mail, password)
    yield put(requestLoginSuccess(response._user))
    yield put(NavigationActions.navigate({ routeName: 'Home' }));
  }
  catch (err){
    console.log(err)
  }
}

export default function* loginSaga() {
  yield takeLatest(REQUEST_LOGIN, requestLogin)
}