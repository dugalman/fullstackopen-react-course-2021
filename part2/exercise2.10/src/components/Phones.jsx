import React from 'react'

const Phones = props => {
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

export default Phones
