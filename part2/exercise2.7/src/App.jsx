import React, { useState } from 'react'

/////////////////////////////////////////////////
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Damian Mac Dougall' }
  ])
  const [newName, setNewName] = useState('')

  const handlerOnChangeName = e => {
    console.log(e.target.value)
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
    const person = { name: newName }
    console.log('person', person)
    setPersons([...persons, person])

    //limpio el formulario
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlerOnSubmit}>
        <div>
          name:
          <input value={newName} onChange={handlerOnChangeName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(p => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
