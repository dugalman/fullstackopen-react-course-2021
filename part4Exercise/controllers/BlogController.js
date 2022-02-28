const blogsRouter = require('express').Router()

const Blog = require('../models/Blog')

blogsRouter.get('/', async (request, response) => {
  const notes = await Blog
    .find({})

  response.json(notes)
})

blogsRouter.post('/', async (request, response) => {

  const { title, author, url, likes } = request.body

  const blog = new Blog({ title, author, url, likes })
  const savedBlog = await blog.save()

  response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = blogsRouter