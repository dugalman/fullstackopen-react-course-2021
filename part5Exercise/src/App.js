import { useState, useEffect } from 'react'
import React, { useRef } from 'react'

import Blog from './components/Blog'
import Togglable from './components/Togglable'
import Notification from './components/Notification'
import LoginForm from './components/Form/LoginForm'
import BlogForm from './components/Form/BlogForm'

//servicw
import blogService from './services/blogs'
import loginService from './services/login'


const App = () => {

  const noteFormRef = useRef()

  const [blogs, setBlogs] = useState([])

  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  function showError(msg) {
    setNotificationMessage(msg)
    setNotificationType('error')
    setTimeout(() => { setNotificationMessage(null); setNotificationType(null) }, 5000)
  }

  function showSucess(msg) {
    setNotificationMessage(msg)
    setNotificationType('success')
    setTimeout(() => { setNotificationMessage(null); setNotificationType(null) }, 5000)
  }

  async function updateBlog() {
    const blogs = await blogService.getAll();
    setBlogs(blogs)
  }



  const handleLogout = async (event) => {
    event.preventDefault()
    loginService.sessionDestroy()
    window.location.reload();
    showSucess('Bye bye')
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      //guardar la session el local storage
      loginService.sessionPut(user)

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      showSucess('belcome back')
    } catch (exception) {
      showError('wrong credentials')
    }
  }

  useEffect(() => {
    const loggedUserJSON = loginService.sessionGet()
    if (loggedUserJSON) {
      setUser(loggedUserJSON)
      blogService.setToken(loggedUserJSON.token)
    }
  }, [])

  useEffect(() => {
    updateBlog()
    //  blogService.getAll()   .then(blogs => setBlogs(blogs)   )
  }, [])


  ///////////////////////////////////////////////////////////////////////
  async function createBlog(title, author, url) {

    noteFormRef.current.toggleVisibility()

    try {
      const blog = await blogService.createNew(title, author, url)
      // console.log('blog',blog)
      showSucess(`A new blog "${blog.title}" by "${blog.author}" added`)
      updateBlog()
    } catch (error) {

      let msg = 'ERROR'

      if (error.response) { msg = error.response.data.error }
      else if (error.request) { msg = error.request.statusMessage }
      else if (error.message) { msg = error.message }

      showError(msg)
    }
  }


  //////////////////////////////////////////////////////////////////////
  return (


    <div>
      <h1>Blogs</h1>

      <Notification message={notificationMessage} type={notificationType} />

      {user === null
        ? <LoginForm
          handleLogin={handleLogin}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword} />
        :
        <div>

          <h1>Welcome {user.name}<button type="button" onClick={handleLogout}>logout</button></h1>


          <Togglable buttonLabel="new blog" ref={noteFormRef}>
            <BlogForm createBlog={createBlog} />
          </Togglable>


          <h2>Blogs</h2>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}

        </div>
      }
    </div>
  )
}

export default App
