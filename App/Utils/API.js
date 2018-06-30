import { create } from 'apisauce'

const key = 'AIzaSyBig6S4f8Lz513eGwUpiewWHbILJwrIBKo'

const createAPI = () => {
  const api = create({
    baseURL: 'https://maps.googleapis.com/maps/api/'
  })

  const searchPlace = (query) => {
    //add search by user location
    const parameters = {
      query,
      key,
      input: query,
      inputtype: 'textquery',
      fields: 'photos,formatted_address,name,rating,opening_hours,geometry'
    }
    return api.get('place/findplacefromtext/json', parameters)
  }

  return {
    searchPlace
  }
}

export default { createAPI }