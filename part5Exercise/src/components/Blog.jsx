import { useState } from 'react'
import React from 'react'


const Blog = ({ blog, handleAddLike, handleDeletePost }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => { setVisible(!visible) }

  const detailsOn = <div style={blogStyle}>
    {blog.title} <button onClick={toggleVisibility}>hide</button>
    <p className='url'>{blog.url}</p>
    <p className='likes'>like {blog.likes} <button onClick={() => handleAddLike(blog)}>Like</button> </p>
    <p className='author'>{blog.author}</p>
    <p><button onClick={() => handleDeletePost(blog)}>DELETE</button> </p>
  </div>

  const detailsOff = <div style={blogStyle}>
    <h2 className='title'>{blog.title}</h2>
    <h3 className='author'>{blog.author}</h3>
    <button onClick={toggleVisibility}>view</button>
  </div>

  return visible ? detailsOn : detailsOff
}

export default Blog