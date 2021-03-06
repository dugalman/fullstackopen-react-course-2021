const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const api = supertest(app)

const Blog = require('../models/Blog')
const User = require('../models/User')

const helper = require('./test_helper')

const getBearer = async () => {
  const credential = {
    'username': helper.listOfUsers[0].username,
    'password': helper.listOfUsers[0].password,
  }

  await api
    .post('/api/login')
    .send(credential)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  //
  const result = await api.post('/api/login').send(credential)
  const token = result.body.token
  return token
}

let headers

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

    const token = await getBearer()
    headers = { 'Authorization': `bearer ${token}` }
  })

  test('fail create blog because empty params', async () => {

    const newBlog = { 'title': '', 'author': '', 'url': '', 'likes': 0 }
    const response = await api
      .post('/api/blogs')
      .set(headers)
      .send(newBlog)
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('Blog validation failed: title: Path `title` is required., url: Path `url` is required.')

  })

  test('fail create blog without login', async () => {

    const newBlog = { 'title': 'titulo 1', 'author': 'damian mac dougall', 'url': 'www.yahoo.com', 'likes': 98 }
    const response = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(401)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('invalid token')

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
      .set(headers)
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')

    //verifico que hay un elemento mas
    const blogsAfter = (await Blog.find({})).length
    expect(blogsAfter).toBe(blogsBefore + 1)

  })

  test('add new blog and verify data', async () => {

    const newBlog = {
      'title': 'titulo 1, add new blog and verify data',
      'author': 'damian mac dougall',
      'url': 'www.yahoo.com',
      'likes': 98
    }

    const response = await api.
      post('/api/blogs')
      .send(newBlog)
      .set(headers)
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')

    //verifico el objeto devuelto
    expect(response.body.title).toBe(newBlog.title)
    expect(response.body.author).toBe(newBlog.author)
    expect(response.body.url).toBe(newBlog.url)
    expect(response.body.likes).toBe(98)

    expect(response.body.author).toBe(helper.listOfUsers[0].name.toLowerCase())
  })


  test('The likes property must have a default value of zero', async () => {

    const newBlog = await api.
      post('/api/blogs')
      .send({ 'title': 'SIN LIKES', 'author': 'damian mac dougall', 'url': 'www.yahoo.com' })
      .expect(201)
      .set(headers)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(newBlog.body.likes).toBe(0)

    //Check into database
    const rta = await Blog.findById(newBlog.body.id)
    expect(rta.likes).toBeDefined()
    expect(rta.likes).toBe(0)
  })


  test('The Title property must required', async () => {
    const response = await api.
      post('/api/blogs')
      .send({ 'author': 'NO TITLE', 'url': 'www.yahoo.com' })
      .set(headers)
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('Blog validation failed: title: Path `title` is required.')
  })


  test('The Url property must required', async () => {
    const response = await api.
      post('/api/blogs')
      .set(headers)
      .send({ 'author': 'NO URL', 'title': 'NO URL' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('Blog validation failed: url: Path `url` is required.')


  })

})

describe('Erase blog', () => {

  beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.listOfBlogs)

    await User.deleteMany({})
    await User.insertMany(helper.listOfUsers)

    const token = await getBearer()
    headers = { 'Authorization': `bearer ${token}` }
  })


  test('succesfull deleted', async () => {

    // make temporal blog
    const blog = await Blog.findOne({})
    const id = blog._id.toString()

    // call delete api method
    await api
      .delete(`/api/blogs/${id}`)
      .set(headers)
      .expect(204)

    // check that the blog was deleted
    const notFoundBlog = Blog.findById(id)
    expect(notFoundBlog._id).toBeUndefined()

  })

  test('invalid format id', async () => {
    // make temporal blog
    const id = 'qwerty'

    // call delete api method
    const response = await api
      .delete(`/api/blogs/${id}`)
      .set(headers)
      .expect(400)

    expect(response.body.error).toBe('malformatted id')

  })

  test('unauthorized user, dont sent', async () => {
    // make temporal blog
    const id = 'qwerty'

    // call delete api method
    const response = await api
      .delete(`/api/blogs/${id}`)
      .expect(401)
    expect(response.body.error).toBe('invalid token')
  })

  test('unauthorized user, different user', async () => {

    // find any blog of differente to login
    const blog = await Blog.findOne({ user: helper.listOfUsers[1]._id })
    const id = blog._id.toString()


    // call delete api method
    const response = await api
      .delete(`/api/blogs/${id}`)
      .set(headers)
      .expect(401)
    expect(response.body.error).toBe('Unauthorized')
  })


  test('not existing blog correct User', async () => {

    // make temporal blog
    const blog = await Blog.findOne({ user: helper.listOfUsers[0]._id })
    const id = blog._id.toString()
    await blog.delete()


    // call delete api method
    await api
      .delete(`/api/blogs/${id}`)
      .set(headers)
      .expect(204)



    // check that the blog was deleted
    const notFoundBlog = Blog.findById(id)
    expect(notFoundBlog._id).toBeUndefined()
  })

})

describe('Update blog', () => {

  test('Update modify number of likes successfully', async () => {
    // make temporal blog
    const blog = new Blog({ title: 'titulo', author: 'autor', url: 'www.example.com', likes: 99 })
    await blog.save()
    const id = blog._id.toString()

    // call delete api method
    const response = await api
      .put(`/api/blogs/${id}`)
      .send({ likes: 100 })
      .expect(201)

    expect(response.body.likes).toBe(100)
  })

  test('Update modify number of likes fail not a number', async () => {
    // make temporal blog
    const blog = new Blog({ title: 'titulo', author: 'autor', url: 'www.example.com', likes: 99 })
    await blog.save()
    const id = blog._id.toString()

    // call delete api method
    await api
      .put(`/api/blogs/${id}`)
      .send({ likes: 'wtf' })
      .expect(400)
  })

  test('Update fail modify number of likes not found blog', async () => {

    const blog = new Blog({ title: 'titulo', author: 'autor', url: 'www.example.com', likes: 90 })
    await blog.save()
    const id = blog._id.toString()
    await blog.remove()

    // call delete api method
    await api
      .put(`/api/blogs/${id}`)
      .send({ likes: 101 })
      .expect(404)

  })

})

afterAll(() => {
  mongoose.connection.close()
})