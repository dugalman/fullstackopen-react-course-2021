


const BlogForm = ({ handleCreate, title, setTitle, author, setAuthor, url, setUrl }) => {

    return (<>
        <form onSubmit={handleCreate}>
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