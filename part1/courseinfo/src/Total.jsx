const Total = prop => {
  const { parts } = prop

  const total = parts.reduce((acu, current) => (acu += current.exercises), 0)

  return <p>Number of exercises {total}</p>
}

export default Total
