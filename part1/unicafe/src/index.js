import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => {
  return <button onClick={props.handler}>{props.name}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const positive = (good / (good + neutral + bad)) * 100
  const all = good + neutral + bad

  // good => 1 , bad => -1 , neutral 0
  const averageWeighted = (good * 1 + bad * -1 + neutral * 0) / all

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {averageWeighted}</p>
      <p>Positive: {positive} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const triggerGood = () => {
    setGood(good + 1)
  }
  const triggerNeutral = () => {
    setNeutral(neutral + 1)
  }
  const triggerBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name='good' handler={triggerGood} />
      <Button name='neutral' handler={triggerNeutral} />
      <Button name='bad' handler={triggerBad} />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
