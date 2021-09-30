import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => {
  return <button onClick={props.handler} >{props.name}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name='good'     handler={() => {setGood( good+1)}  } />
      <Button name='neutral'  handler={() => {setNeutral( neutral+1)}  } />
      <Button name='bad'      handler={() => {setBad( bad+1)}  } />

    <h1>Statistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
