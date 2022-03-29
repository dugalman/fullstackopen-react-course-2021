

const listOfBlogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    user: '6206bd5b70fdcec54b9298db', //dmacdougall
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    user: '6206bd5b70fdcec54b9298db', //dmacdougall
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    user: '6206bd5b70fdcec54b9298da', //icordone
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    user: '6204faaa8be0dac9c6e80eb3', //root
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    user: '6204faaa8be0dac9c6e80eb3', //root
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    user: '6204faaa8be0dac9c6e80eb3', //root
    likes: 2,
    __v: 0
  }
]

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]



const listOfUsers = [
  {
    _id: '6206bd5b70fdcec54b9298db',
    name: 'Damian Mac Dougall',
    username: 'dmacdougall',
    password: '123456',
    passwordHash: '$2b$10$POZO.rxpkccI6XmGD37OUOcRRKDMch3CIXyh8fiaS/GbYnK0ecJzG',
    __v: 0
  },
  {
    _id: '6206bd5b70fdcec54b9298da',
    name: 'Isabel Cordone',
    username: 'icordone',
    password: '123456',
    passwordHash: '$2b$10$kFzCRxiWtWXdAqIgGx46OeopMPwdSRJcR1qP3jlNL3/bt9Rot5K.i',
    __v: 0
  },
  {
    _id: '6204faaa8be0dac9c6e80eb3',
    name: 'root',
    username: 'root',
    password: '123456',
    passwordHash: '$2b$10$6TnOj3nrL4OhmNHOjL6Rk.4kZ8P4F.zoegivCXK316aU7T7DLsp86',
    __v: 0
  }
]

module.exports = {
  listOfBlogs,
  listWithOneBlog,
  listOfUsers
}