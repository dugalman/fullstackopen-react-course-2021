import React from 'react'

const Person = ({ personFilter, handlerDelete }) => {
  return (
    <ul>
      {personFilter.map(p => (
        <li key={p.name}>
          {p.name} {p.number}
          <button onClick={() => handlerDelete(p.id, p.name)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Person
