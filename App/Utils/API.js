import { create } from 'apisauce'

const key = 'AIzaSyBig6S4f8Lz513eGwUpiewWHbILJwrIBKo'

const createAPI = () => {
  const api = create({
    baseURL: 'https://maps.googleapis.com/maps/api/'
  })

  const searchPlace = (params) => {
    const { query } = params
    const location = {
      latitude: params.location.latitude,
      longitude: params.location.longitude
    }
    const parameters = {
      location: `${location.latitude},${location.longitude}`,
      radius: 100,
      key,
      input: query,
      inputtype: 'textquery',
      fields: 'photos,formatted_address,name,rating,opening_hours,geometry'
    }
    return api.get('place/findplacefromtext/json', parameters)
  }

  const autocompletePlace = (params) => {
    const { query } = params
    const location = {
      latitude: params.location.latitude,
      longitude: params.location.longitude
    }
    const parameters = {
      location: `${location.latitude},${location.longitude}`,
      radius: 100,
      key,
      input: query,
      inputtype: 'textquery',
      fields: 'photos,formatted_address,name,rating,opening_hours,geometry'
    }
    return api.get('place/autocomplete/json', parameters)
  }

  return {
    searchPlace,
    autocompletePlace
  }
}

export default { createAPI }