const blogsRouter = require('express').Router()

const Blog = require('../models/Blog')
const User = require('../models/User')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({})
    .populate('user', { username: 1, name: 1 })

  response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {

  const { title, author, url, likes } = request.body

  const user = await User.findOne({})

  const blog = new Blog({
    title,
    author,
    url,
    likes,
    user: user._id
  })

  try {
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(savedBlog)
  } catch (exception) {
    next(exception)
  }


})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    likes: body.likes
  }

  const updatedNote = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  if (!updatedNote) {
    return response.status(404).send('Blog with given id does not exist')
  } else {
    return response.status(201).json(updatedNote)
  }

})


module.exports = blogsRouter