import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(`${baseUrl}?_sort=name&_order=asc`)
  return request.then(response => response.data)
}

const create = person => {
  const request = axios.post(baseUrl, person)
  return request.then(response => response.data)
}

const update = (id, person) => {
  const request = axios.put( baseUrl, person)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove }
