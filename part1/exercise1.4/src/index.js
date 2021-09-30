import React from 'react'
import ReactDOM from 'react-dom'

/////////////////////////////////////////////////
const Header = prop => {
  return <h1>{prop.course}</h1>
}

/////////////////////////////////////////////////
const Part = prop => {
  const { part, exercise } = prop
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

/////////////////////////////////////////////////
const Content = prop => {
  const { parts } = prop

  let out = []
  parts.forEach(t => {
    console.log(`name ${t.name} | exercise ${t.exercises}`)
    out.push(<Part part={t.name} exercise={t.exercises} />)
  })

  return out
}

/////////////////////////////////////////////////
const Total = prop => {
  const { parts } = prop

  let out = 0
  parts.forEach(t => {
    out += t.exercises
  })
  return <p>Number of exercises {out}</p>
}

/////////////////////////////////////////////////
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
