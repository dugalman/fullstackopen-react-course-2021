import React from 'react'

const Country = props => {
  const TOO_MANY_COUNTRIES = 10
  const listSort = props.list
  let out

  if (listSort.length === 0) return ''
  if (listSort.length > TOO_MANY_COUNTRIES) return ManyCountries
  if (1 < listSort.length && listSort.length <= TOO_MANY_COUNTRIES)
    return SomeCountries(listSort)
  if (listSort.length === 1) return OneCountry(listSort[0])

  return out
}

export default Country

const OneCountry = theCountry => (
  <>
    <h1> {theCountry.name.official}</h1>
    <p>capital :{theCountry.capital[0]}</p>
    <p>population : {theCountry.population}</p>
    <h2>languages</h2>
    <ul>
      {Object.keys(theCountry.languages).map(key => (
        <li key={key} >{theCountry.languages[key]}</li>
      ))}
    </ul>
    <div style={{ fontSize: '10em' }}>{theCountry.flag}</div>
  </>
)

const ManyCountries = <h2>Too many matches, specify another filter</h2>

const SomeCountries = mylist => (
  <ul>
    {mylist.map(p => (
      <li key={p.name.official}>{p.name.official}</li>
    ))}
  </ul>
)
