import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'


const App = () => {
  const [blogs, setBlogs] = useState([])

  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  function showError(msg) {
    setNotificationMessage(msg)
    setNotificationType('error')
    setTimeout(() => { notificationMessage(null); notificationType(null) }, 5000)
  }

  function showSucess(msg) {
    setNotificationMessage(msg)
    setNotificationType('success')
    setTimeout(() => { notificationMessage(null); notificationType(null) }, 5000)
  }

  const createBlog = async (event) => {
    event.preventDefault()
    blogService.createNew(title, author, url)
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    loginService.sessionDestroy()
    window.location.reload();
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password, })

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
    blogService.getAll()
      .then(blogs => setBlogs(blogs)
      )
  }, [])

  return (


    <div>
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


          <h2>Create New Blog</h2>
          <BlogForm
            handleCreate={createBlog}
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            url={url}
            setUrl={setUrl}
          />


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
