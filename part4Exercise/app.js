const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')

// ROUTER INCLUDES
const blogsRouter = require('./controllers/BlogController')
const usersRouter = require('./controllers/UserController')
const loginRouter = require('./controllers/LoginController')
const middleware = require('./utils/middleware')

const logger = require('./utils/logger')

// START
logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

// set up EXPRESS
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

// ADD EXPRESS HANDLER'S ROUTE
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login',loginRouter)

// ADD DEFAULT HANDLER'S
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
