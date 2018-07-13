import firebase from 'react-native-firebase'

export const signInAndRetrieveDataWithEmailAndPassword = (mail, password) => {
  return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(mail, password)
}
