import React from "react";


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

  export default OneCountry;