const usersRouter = require('express').Router()

const bcrypt = require('bcrypt')
const User = require('../models/User')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  return response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response) => {

  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()
  response.status(201).json(savedUser)

})


module.exports = usersRouter