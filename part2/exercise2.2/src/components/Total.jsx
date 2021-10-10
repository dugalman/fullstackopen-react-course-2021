import React from 'react'

const Total = ({ parts }) => {
  let out = 0
  parts.forEach(t => {
    out += t.exercises
  })
  return (
    <p>
      <strong>Number of exercises {out}</strong>
    </p>
  )
}

export default Total
