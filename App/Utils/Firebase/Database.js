import firebase from 'react-native-firebase'

const Firestore = firebase.firestore()
const users = Firestore.collection('users')
const places = Firestore.collection('places')

export const getUserObject = (userId) => {
  return users.doc(userId).get().then(doc => doc.data())
}

export const getUserPlaces = (placeIds) => {
  const arrayOfPromises = placeIds.map(id => {
    return places.doc(id).get().then(doc => doc.data())
  })
  

  return Promise.all(arrayOfPromises)
}

export const setUserPlace = (data, userId) => {
  Firestore.runTransaction(transaction => {
    const docRef = users.doc(userId)
    const keyRef = 'markers'
    return transaction.get(docRef).then(snapshot => { 
      const largerArray = snapshot.get(keyRef)
      
      largerArray.push(data.place_id)
      transaction.update(docRef, keyRef, largerArray)
    })
  })

  places.doc(data.place_id).set(data)
}