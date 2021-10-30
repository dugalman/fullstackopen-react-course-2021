import React from 'react'
import PersonField from './PersonField'

const PersonForm = props => {
  const {
    handlerOnSubmit,
    newName,
    handlerOnChangeName,
    newPhone,
    handlerOnChangePhone,
  } = props

  return (
    <form onSubmit={handlerOnSubmit}>
      <PersonField
        name='Name'
        currentValue={newName}
        handleOnChange={handlerOnChangeName}
      />
      <PersonField
        name='Phone'
        currentValue={newPhone}
        handleOnChange={handlerOnChangePhone}
      />
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}
export default PersonForm
