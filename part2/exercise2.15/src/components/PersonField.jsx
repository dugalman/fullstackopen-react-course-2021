import React from 'react'

const PersonField = props => {
  const { name, currentValue, handleOnChange } = props
  return (
    <div>
      {name}: <input value={currentValue} onChange={handleOnChange} />
    </div>
  )
}

export default PersonField
