import React from 'react'

const Person = props => {

  const personFilter = props.list

  return (
    <ul>
      {personFilter.map(p => (
        <li key={p.name}>
          {p.name} {p.phone}
        </li>
      ))}
    </ul>
  )
}

export default Person
