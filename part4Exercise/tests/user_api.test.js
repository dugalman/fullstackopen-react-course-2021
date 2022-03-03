const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const api = supertest(app)

const User = require('../models/User')

const helper = require('./test_helper')


describe('read blogs', () => {

  beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.listOfUsers)
  })

  test('users are returned as json', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('on empty colection retunr zero users', async () => {
    await User.deleteMany({})
    const response = await api.get('/api/users')

    expect(response.body).toHaveLength(0)
  })

  test('on not empty colection return the correct size', async () => {
    const response = await api.get('/api/users')

    expect(response.body).toHaveLength( helper.listOfUsers.length  )
  })


})

afterAll(() => {
  mongoose.connection.close()
})