const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const api = supertest(app)

const Blog = require('../models/Blog')

const helper = require('./test_helper')


// SET DATABASE
test('unknown End point', async () => {

  const response = await api
    .get('/api/qwerty')
    .expect(404)
    .expect('Content-Type', /application\/json/)

  expect(response.body.error).toContain('unknown endpoint')

})


describe('blogs method get', () => {

  beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.listOfBlogs)
  })

  test('blobs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.listOfBlogs.length)
  })

  test('on empty colection retunr zero blogs', async () => {
    await Blog.deleteMany({})
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(0)
  })


  test('In the database the blog collection must have an identifier called _id', async () => {
    const blogs = await Blog.find({})
    expect(blogs[0]._id).toBeDefined()
  })

  test('In the blog api you must have an identifier called id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })


})



afterAll(() => {
  mongoose.connection.close()
})