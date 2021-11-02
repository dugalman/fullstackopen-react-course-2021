import React from 'react'

const CountryFilter = ({ currentValue, handleOnchage }) => {
  return (
    <div>
      <span>Find Country</span> 
      <input value={currentValue} onChange={handleOnchage} />
    </div>
  )
}

export default CountryFilter
