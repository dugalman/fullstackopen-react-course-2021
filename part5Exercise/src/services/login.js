import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const sessionDestroy = () => {
  window.localStorage.removeItem('loggedNoteappUser')
}

const sessionPut = (user) =>{
  window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
}

const sessionGet = () => {
  const session = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
  return session
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  login ,
  sessionGet,
  sessionPut,
  sessionDestroy
}