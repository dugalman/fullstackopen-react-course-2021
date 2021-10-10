import React from 'react'

const Total = ({ parts }) => {
  // let out = 0
  // parts.forEach(t => {
  //   out += t.exercises
  // })

  const initialValue = 0
  const reducer = (sum, val) => {
    console.log('what is happening ', sum, val)
    return sum + val.exercises
  }
  const out = parts.reduce(reducer, initialValue)

  return (
    <p>
      <strong>Number of exercises {out}</strong>
    </p>
  )
}

export default Total
