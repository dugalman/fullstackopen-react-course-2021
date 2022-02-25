const supertest = require('supertest')

const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const User = require('../models/user')

describe('Login', () => {

  beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.initialUsers)
  })

  test('with empty credential', async () => {

    const response = await api
      .post('/api/login')
      .expect(401)
      .expect('Content-Type', /application\/json/)

    expect(response.body.error).toContain('invalid username or password')

  })

  test('with Invalid credential', async () => {

    const credential = {
      'username': 'juan',
      'password': 'qwerty1234'
    }

    const response = await api
      .post('/api/login')
      .send(credential)
      .expect(401)
      .expect('Content-Type', /application\/json/)

    expect(response.body.error).toContain('invalid username or password')
  })

  test('with Valid credential', async () => {

    const credential = {
      'username': 'mluukai',
      'password': 'salainen'
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

  test('with Valid credential two login', async () => {

    const credential = {
      'username': 'mluukai',
      'password': 'salainen'
    }

    const response1 = await api
      .post('/api/login')
      .send(credential)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response1.body.username).toEqual(credential.username)
    expect(response1.body.token).toBeDefined()


    const response2 = await api
      .post('/api/login')
      .send(credential)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response2.body.username).toEqual(credential.username)
    expect(response2.body.token).toBeDefined()
    //
    expect(response2.body.username).toEqual(response1.body.username)
    expect(response2.body.token).toEqual(response1.body.token)
  })



})