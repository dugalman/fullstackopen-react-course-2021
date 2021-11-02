import React, { useState, useEffect } from 'react'
import axios from 'axios'

/////////////////////////////////////////////7
const OneCountry = theCountry => {
  const [weather, setWeather] = useState({ temp: 0, windSpeed: 0, windDeg: 0 })

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY

    console.log(theCountry.capital[0]);
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${theCountry.capital[0]},${theCountry.fifa}&appid=${api_key}&units=metric`

    axios.get(uri).then(response => {
      console.log(response.data)
      setWeather({
        temp: response.data.main.temp,
        windSpeed: response.data.wind.speed,
        windDeg: response.data.wind.deg
      })
    })
  }, [theCountry])

  // console.log(3, theCountry)

  return (
    <>
      <h1> {theCountry.name.official}</h1>
      <p>capital :{theCountry.capital[0]}</p>
      <p>population : {theCountry.population}</p>
      <h2>languages</h2>
      <ul>
        {Object.keys(theCountry.languages).map(key => (
          <li key={key}>{theCountry.languages[key]}</li>
        ))}
      </ul>
      <div style={{ fontSize: '10em' }}>{theCountry.flag}</div>

      <h1>Weather in {theCountry.capital[0]} </h1>
      <p>Temperature : {weather.temp} Celcius </p>
      <p>
        Wind: {weather.windSpeed} deg {weather.windDeg}
      </p>
    </>
  )
}

export default OneCountry
