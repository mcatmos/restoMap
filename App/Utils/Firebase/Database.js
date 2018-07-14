import firebase from 'react-native-firebase'

const Firestore = firebase.firestore()
const users = Firestore.collection('users')
const places = Firestore.collection('places')

export const getUserObject = (userId) => {
  return users.doc(userId).get().then(doc => doc.data())
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  })
}

export const getUserPlaces = (placeIds) => {
  const arrayOfPromises = placeIds.map(id => {
    return places.doc(id).get().then(doc => doc.data())
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    })
  })
  

  return Promise.all(arrayOfPromises)
}

export const setUserPlace = (data, userId) => {
  users.doc(userId).set({ 
    markers: {
      [data.place_id]: data
    }
  })

  places.doc(data.place_id).set(data)
}