// Obtiene y setea los datos de API
export const fetchAPI = async(selectedResource, searchValue) => {
  const resources = ['character', 'location', 'episode']
  const baseURL = `https://rickandmortyapi.com/api/${resources[selectedResource-1]}?name=${searchValue}` // TODO: implementar el resto de recursos
  const responseAPI = await fetch(baseURL)
  const responseJSON = await responseAPI.json()

  return (responseJSON.results)
}