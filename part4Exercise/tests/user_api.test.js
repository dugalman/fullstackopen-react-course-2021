const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const api = supertest(app)

const User = require('../models/User')

const helper = require('./test_helper')


describe('read users', () => {

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

    expect(response.body).toHaveLength(helper.listOfUsers.length)
  })
})

describe('create user', () => {

  beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.listOfUsers)
  })


  test('Sucessfull create', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'username': 'gmacdougall', 'name':'Gaston Mac Dougall','password': 'qwerty123' })
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.username).toBe('gmacdougall')
    expect(response.body.name).toBe('Gaston Mac Dougall')
  })

  test('Faild create because is duplicated', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'username': 'dmacdougall', 'name':'Damian Mac Dougall','password': 'qwerty123' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: username: Error, expected `username` to be unique. Value: `dmacdougall`')
  })


  test('The name property must required', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'username': 'jperez','password': '99999999' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: name: Path `name` is required.')
  })

  test('The username property must required', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'name': 'juan perez', 'password': '99999999' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: username: Path `username` is required.')
  })

  test('The password property must required', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'name': 'juan perez', 'username': 'jperez' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: password is required')
  })


  test('The username is shorter', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'username': 'a',name:'Juan perez','password': '99999999' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: username: Path `username` (`a`) is shorter than the minimum allowed length (3).')
  })

  test('The name is shorter', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'username': 'jperez',name:'JP','password': '99999999' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: name: Path `name` (`JP`) is shorter than the minimum allowed length (3).')
  })

  test('The password is shorter', async () => {
    const response = await api.
      post('/api/users')
      .send({ 'username': 'jperez',name:'Juan Perez','password': '123' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(response.body.error).toBe('User validation failed: password is shorter than the minimum allowed length (3)')
  })


  // test('The username is unique', async () => {
  //   const response = await api.
  //     post('/api/users')
  //     .send({ 'username': 'jperez',name:'Julian Pascal Perez','password': '123456799' })
  //     .expect(400)
  //     .expect('Content-Type', 'application/json; charset=utf-8')

  //   expect(response.body.error).toBe('User validation failed: username: Path `username` (`a`) is shorter than the minimum allowed length (3).')
  // })

})

afterAll(() => {
  mongoose.connection.close()
})