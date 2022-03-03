const blogsRouter = require('express').Router()

const Blog = require('../models/Blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({})

  response.json(blogs)
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

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    likes: body.likes
  }

  const updatedNote = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  if (!updatedNote){
    return response.status(404).send('Blog with given id does not exist')
  }else{
    return response.status(201).json(updatedNote)
  }

})


module.exports = blogsRouter