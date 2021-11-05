/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

/** @returns Promise */
const getAll = () => {
  return axios.get(baseUrl)
}

/** @returns Promise */
const create = newObject => {
  return axios.post(baseUrl, newObject)
}

/** @returns Promise */
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {
  getAll: getAll,
  create: create,
  update: update
}
