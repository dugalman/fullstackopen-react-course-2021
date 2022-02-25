const Note = require('../models/note')
const User = require('../models/user')


const initialUsers = [
  {
    '_id': '620d98e710a846aac5b0d6c6',
    'username': 'mluukai',
    'passwordHash': '$2b$10$1b49IS61fteKQc5u5GW7G.YyyfXUzRB5rZzh9ehQlYHd6OFaEkWNe',
  }
]

const initialNotes = [
  {
    content: 'HTML is easy',
    date: new Date(),
    important: false
  },
  {
    content: 'Browser can execute only Javascript',
    date: new Date(),
    important: true
  }
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon', date: new Date() })
  await note.save()
  await note.remove()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map(note => note.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialNotes,initialUsers, nonExistingId, notesInDb, usersInDb
}