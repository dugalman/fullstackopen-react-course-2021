import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import PhoneFilter from './components/PhoneFilter'
import personService from './services/person'

/////////////////////////////////////////////////
const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterNane, setFilterNane] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService.getAll().then(allPerson => {
      setPersons(allPerson)
    })
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

    if (!window.confirm(`Seguro que desea actualizar los datos de ${newName}`)) {
      return
    }

    const person = { name: newName, phone: newPhone }
    const currentPerson = persons.find(item => item.name === newName)

    // si el nombre ya exite actualizo el telefono
    if (!currentPerson) {
      personService
      .create(person).then(newPerson => {
        setPersons([...persons, newPerson])
        //limpio el formulario
        setNewName('')
        setNewPhone('')
      })
    } else {
      personService
      .update(currentPerson.id, { ...currentPerson, phone: newPhone })
      .then(newPerson => {
          const filtered = persons.filter(person => person.id !== newPerson.id)
          setPersons([...filtered, newPerson])

          //limpio el formulario
          setNewName('')
          setNewPhone('')
      })
    }
  }

  const handlerOnDeletePerson = (id, name) => {
    if (window.confirm(`Do you delete ${name} person`)) {
      personService
        .remove(id)
        .then(deleted => {
          console.log('deleted', deleted)
          // SI SE BORRO RECARGO TODO DESDE LA BASES
          // personService.getAll().then(allPerson => {setPersons(allPerson)})

          // OTRA FORMA DE BORRAR EL DIRECTEMENTE ELIMINANDO EL ELEMENTO
          const filtered = persons.filter(person => person.id !== id)
          setPersons(filtered)
        })
        .catch(error => {
          console.log(error)
        })
    }
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
      <Person
        personFilter={personFilter}
        handlerDelete={handlerOnDeletePerson}
      />
    </div>
  )
}

export default App
