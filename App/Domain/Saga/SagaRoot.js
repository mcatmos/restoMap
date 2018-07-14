import { all, spawn } from 'redux-saga/effects'
import { 
  watchLocationChannel, 
  getCurrentPosition, 
  watchCurrentPosition 
} from './LocationSaga'
import SearchSaga from './SearchSaga'
import LoginSaga from './LoginSaga'
import UserSaga from './UserSaga'
import MarkerSaga from './MarkerSaga'
import API from '../../Utils/API'

const APIService = API.createAPI()

export default function* sagaRoot() {
 yield all([
    SearchSaga(APIService),
    LoginSaga(),
    UserSaga(),
    MarkerSaga(),
    spawn(watchLocationChannel),
    spawn(getCurrentPosition),
    spawn(watchCurrentPosition)
  ])
}