import React, { useState } from 'react'
import Phones from './components/Phones'
import PersonForm from './components/PersonForm'
import PhoneFilter from './components/PhoneFilter'

/////////////////////////////////////////////////
const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterNane, setFilterNane] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])

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
    console.log('person', person)
    setPersons([...persons, person])

    //limpio el formulario
    setNewName('')
    setNewPhone('')
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
      <PhoneFilter currentValue={filterNane} handleOnchage={handlerOnChangeFilterName} />

      <h2>Add a new </h2>
      <PersonForm
        handlerOnSubmit={handlerOnSubmit}
        newName={newName}        handlerOnChangeName={handlerOnChangeName}
        newPhone={newPhone}      handlerOnChangePhone={handlerOnChangePhone}
      />

      <h2>Number</h2>
      <Phones list={personFilter} />
    </div>
  )
}

export default App
