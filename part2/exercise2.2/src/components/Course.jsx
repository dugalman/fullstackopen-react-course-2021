import React from 'react'
import Total from './Total'

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
    out.push(<Part key={t.id} part={t.name} exercise={t.exercises} />)
  })

  return out
}



const Course = ({course}) => {

    console.log(course);
    return (
    <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}



export default Course
