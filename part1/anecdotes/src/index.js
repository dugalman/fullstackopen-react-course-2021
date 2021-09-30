import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/////////////////////////////////////////////////
const Vote = props => {
  return <button onClick={props.trigger}>vote</button>
}

/////////////////////////////////////////////////
const Anecdote = props => {
  const { setSelected, anecdotes } = props

  const azar = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <button
      onClick={() => {
        setSelected(azar(anecdotes.length, 0))
      }}
    >
      next anecdote
    </button>
  )
}

/////////////////////////////////////////////////
const AnecdoteWithMostVotes = ({ points, anecdotes }) => {
  const indexMostVotes = points.indexOf(Math.max(...points))

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[indexMostVotes]}</div>
      has {parseInt(points[indexMostVotes])} votes
    </>
  )
}

/////////////////////////////////////////////////
const App = props => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(props.anecdotes.length))

  const triggerAddVote = () => {
    const copy = [...points]
    copy[selected] += 1

    console.log('triggerAddVote', points, copy)

    setPoints(copy)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      has {parseInt(points[selected])} votes
      <br />
      <Vote trigger={triggerAddVote} />
      <Anecdote setSelected={setSelected} anecdotes={anecdotes} />
      <br />
      <AnecdoteWithMostVotes points={points} anecdotes={anecdotes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
