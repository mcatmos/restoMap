import { all, spawn } from 'redux-saga/effects'
import { 
  watchLocationChannel, 
  getCurrentPosition, 
  watchCurrentPosition 
} from './LocationSaga'
import SearchSaga from './SearchSaga'
import API from '../../Utils/API'

const APIService = API.createAPI()

export default function* sagaRoot() {
 yield all([
    SearchSaga(APIService),
    spawn(watchLocationChannel),
    spawn(getCurrentPosition),
    spawn(watchCurrentPosition)
  ])
}