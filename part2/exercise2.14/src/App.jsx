import React, { useState, useEffect } from 'react'
import CountryFilter from './components/CountryFilter'
import Country from './components/Country'
import axios from 'axios'

/////////////////////////////////////////////////
const App = () => {
  const [searchName, setSearchName] = useState('')
  const [country, setCountry] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountry(response.data))
  }, [])
  
  const handlerOnChangeSearchName = e => {
    e.preventDefault()
    console.log('search Name', e.target.value)
    setSearchName(e.target.value)
  }

  const countryFilter =
    typeof searchName === 'undefined' || searchName.length === 0
      ? country
      : country.filter(item => {
          return item.name.official.toLowerCase().includes(searchName.toLowerCase())
        })

        
  // console.log('country', countryFilter)

  return (
    <div>
      <CountryFilter
        currentValue={searchName}
        handleOnchage={handlerOnChangeSearchName}
      />

      <hr />
      <Country list={countryFilter} handler={setSearchName} />
    </div>
  )
}

export default App
