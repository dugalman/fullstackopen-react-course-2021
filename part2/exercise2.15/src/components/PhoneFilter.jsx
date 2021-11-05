import React from 'react'

const PhoneFilter = ({ currentValue, handleOnchage }) => {
  return (
    <div>
      <span>Filter by name</span>
      <input value={currentValue} onChange={handleOnchage} />
    </div>
  )
}

export default PhoneFilter
