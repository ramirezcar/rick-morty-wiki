const BASE_URL = 'https://rickandmortyapi.com/api/'

// Obtiene y setea los datos de API
export const getAll = async (selectedResource) => {
  // console.log('service', selectedResource, searchValue);
  const resources = ['character', 'location', 'episode']
  const baseURL = `${BASE_URL}${resources[selectedResource - 1]}`
  const responseAPI = await fetch(baseURL)
  const responseJSON = await responseAPI.json()

  return (responseJSON)
}

export const getAllByName = async (selectedResource, searchValue, page = 1) => {
  const resources = ['character', 'location', 'episode']
  const baseURL = `${BASE_URL}${resources[selectedResource - 1]}?name=${searchValue}&page=${page}`
  const responseAPI = await fetch(baseURL)
  const responseJSON = await responseAPI.json()

  return responseJSON
}

// Obtiene y setea los datos de API
export const getCharacter = async (id) => {
  const baseURL = `https://rickandmortyapi.com/api/character/${id}`
  const responseAPI = await fetch(id)
  const responseJSON = await responseAPI.json()

  return responseJSON
}