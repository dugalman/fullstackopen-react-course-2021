import React, { useState } from 'react'


const BlogForm = ({ createBlog }) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    const addBlog = async (event) => {
        event.preventDefault()
        await createBlog(title, author, url)
    }

    return (<>

        <h2>Create New Blog</h2>

        <form onSubmit={addBlog}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>

            <div>
                <label>Author</label>
                <input
                    type="text"
                    value={author}
                    name="author"
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </div>

            <div>
                <label>Url</label>
                <input
                    type="url"
                    value={url}
                    name="url"
                    onChange={({ target }) => setUrl(target.value)}
                />
            </div>

            <button type="submit">create</button>
        </form>
    </>)
}

export default BlogForm

