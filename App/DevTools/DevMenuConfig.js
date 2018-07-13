import {
  requestLogin,
  requestLogout
} from '../Domain/Actions/LoginActions'
import Config from 'react-native-config'
import { purgeState } from '../Domain/Actions/UIActions'

export const config = (dispatch) => {
  return [
    {
      label: 'Log In',
      onPress: () => dispatch(requestLogin(Config.user, Config.password))
    },
    {
      label: 'Log Out',
      onPress: () => dispatch(requestLogout())
    },
    {
      label: 'Purge State',
      onPress: () => dispatch(purgeState())
    }
  ]
}