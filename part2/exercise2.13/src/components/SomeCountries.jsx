import React from 'react'

const SomeCountries = (mylist, handler) => (
  <ul>
    {mylist.map(p => (
      <li key={p.name.official}>
        {p.name.official}
        <button onClick={() => handler(p.name.official)}>show</button>
      </li>
    ))}
  </ul>
)

export default SomeCountries
