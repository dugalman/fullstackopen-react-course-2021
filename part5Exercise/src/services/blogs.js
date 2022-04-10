import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null


const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = async () => {
  // console.log("getall");
  try {
    const response = await axios.get(baseUrl)
    // console.log(response);
    return response.data
  } catch (error) {
    console.error(error);
  }
}


const createNew = async (title, author, url, likes = 0) => {

  console.log("createNew");

  const newBlog = { title, author, url, likes }

  const config = {
    headers: { 'Authorization': token }
  }


  try {
    const response = await axios.post(baseUrl, newBlog, config)
    console.log(response);
    return response.data
  } catch (error) {
    console.error(error);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  createNew,
  setToken
}