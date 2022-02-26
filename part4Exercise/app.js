const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')

// ROUTER INCLUDES
const blogsRouter = require('./controllers/BlogController')


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


// ADD ROUTES TO EXPRESS
app.use('/api/blogs', blogsRouter)




module.exports = app
