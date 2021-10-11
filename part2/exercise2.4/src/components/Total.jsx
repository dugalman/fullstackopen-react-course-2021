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

  return <h3>Number of exercises {out}</h3>
}

export default Total
