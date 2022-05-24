import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (title, author, url, likes = 0) => {

  const newBlog = { title, author, url, likes }
  const config = {
    headers: { 'Authorization': token }
  }

  const response = await axios.post(baseUrl, newBlog, config)
  // console.log(response);
  return response.data
}

const addLike = async (actualBlog) => {

  const uri = baseUrl + '/' + actualBlog.id
  const blog = { ...actualBlog, likes: actualBlog.likes + 1 }
  const config = {
    headers: { 'Authorization': token }
  }

  const response = await axios.put(uri, blog, config)
  return response.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  createNew,
  setToken,
  addLike
}