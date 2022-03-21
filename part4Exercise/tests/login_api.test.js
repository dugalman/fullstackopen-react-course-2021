const mongoose = require('mongoose')
const supertest = require('supertest')

const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const User = require('../models/User')

describe('Login', () => {

  beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.listOfUsers)
  })

  test('with Valid credential', async () => {

    const credential = {
      'username': 'dmacdougall',
      'password': '123456'
    }

    const response = await api
      .post('/api/login')
      .send(credential)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    // console.log('body', response.body)
    expect(response.body.username).toEqual(credential.username)
    expect(response.body.token).toBeDefined()
  })

  test('with Invalid credential', async () => {

    const credential = {
      'username': 'juanperez',
      'password': '123456'
    }

    const response = await api
      .post('/api/login')
      .send(credential)
      .expect(401)
      .expect('Content-Type', /application\/json/)

    console.log('body', response.body)
    expect(response.body.error).toContain('invalid username or password')

  })


})

afterAll(() => {
  mongoose.connection.close()
})