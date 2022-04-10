import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null


const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const createNew = (data, session) => {


  const newBlog = {
    "title": data.title,
    "author": data.author,
    "url": data.url,
    "likes": 99
  }

  const headers = session

  const request = axios
    .post(baseUrl)
    .send(newBlog)
    .set(headers)
  return request.then(response => response.data)
}

export default {
  getAll,
  setToken
}