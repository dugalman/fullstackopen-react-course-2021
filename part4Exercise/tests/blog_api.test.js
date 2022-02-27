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


describe('read blogs', () => {

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

describe('create blogs', () => {
  beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.listOfBlogs)
  })

  test('add new blog and check has one more', async () => {
    const blogsBefore = (await Blog.find({})).length

    const newBlog = {
      'title': 'titulo 1',
      'author': 'damian mac dougall',
      'url': 'www.yahoo.com',
      'likes': 98
    }

    await api.
      post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')

    //verifico que hay un elemento mas
    const blogsAfter = (await Blog.find({})).length
    expect(blogsAfter).toBe(blogsBefore + 1)

  })

  test('add new blog and verify data', async () => {

    const newBlog = {
      'title': 'titulo 1',
      'author': 'damian mac dougall',
      'url': 'www.yahoo.com',
      'likes': 98
    }

    const response = await api.
      post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')

    //verifico el objeto devuelto
    expect(response.body.title).toBe(newBlog.title)
    expect(response.body.author).toBe(newBlog.author)
    expect(response.body.url).toBe(newBlog.url)
    expect(response.body.likes).toBe(98)
  })
})


afterAll(() => {
  mongoose.connection.close()
})