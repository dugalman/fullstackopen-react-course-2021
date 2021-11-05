import React, { useState, useEffect } from 'react'
import Phones from './components/Phones'
import PersonForm from './components/PersonForm'
import PhoneFilter from './components/PhoneFilter'
import axios from 'axios'

/////////////////////////////////////////////////
const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterNane, setFilterNane] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const handlerOnChangeFilterName = e => {
    e.preventDefault()
    console.log('filterName', e.target.value)
    setFilterNane(e.target.value)
  }

  const handlerOnChangePhone = e => {
    console.log('phone', e.target.value)
    setNewPhone(e.target.value)
  }

  const handlerOnChangeName = e => {
    console.log('Name', e.target.value)
    setNewName(e.target.value)
  }

  const handlerOnSubmit = e => {
    e.preventDefault()

    // si el nombre ya exite no permito que lo agregen de nuevo
    if (persons.find(item => item.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    // tenes que mandar un copia del array de personas
    // o hacerlo inmutable
    // NO HAGAS ARRAY.PUSH
    const person = { name: newName, phone: newPhone }

    axios.post('http://localhost:3001/persons', person).then(response => {
      console.log('person', response.data)
      setPersons([...persons, response.data])
      //limpio el formulario
      setNewName('')
      setNewPhone('')
    })
  }

  const personFilter =
    typeof filterNane === 'undefined' || filterNane.length === 0
      ? persons
      : persons.filter(item => {
          console.log(item.name, filterNane)
          return item.name.toLowerCase().includes(filterNane.toLowerCase())
        })

  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneFilter
        currentValue={filterNane}
        handleOnchage={handlerOnChangeFilterName}
      />

      <h2>Add a new </h2>
      <PersonForm
        handlerOnSubmit={handlerOnSubmit}
        newName={newName}
        handlerOnChangeName={handlerOnChangeName}
        newPhone={newPhone}
        handlerOnChangePhone={handlerOnChangePhone}
      />

      <h2>Number</h2>
      <Phones list={personFilter} />
    </div>
  )
}

export default App
