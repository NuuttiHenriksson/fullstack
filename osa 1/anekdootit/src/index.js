import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
  )

const App = (props) => {
  const first = 'Anecdote of the day'
  const second = 'Anecdote with most votes'
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const randomIndex = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const vote = () => {
    const now = [...points]
    now[selected] += 1
    setPoints(now)
  }


  return (
    <div>
      <Header text={first}/>
      {props.anecdotes[selected]}
      <br></br>
      has {points[selected]} votes
      <br></br>
      <Button
      handleClick = {vote}
      text = 'vote'
      />
      <Button
      handleClick = {randomIndex}
      text = 'next anecdote'
      />
      <Header text={second}/>
      {console.log(Math.max.apply(Math,points))}
      {props.anecdotes[(points.indexOf(Math.max.apply(Math,points)))]} <br></br>
      has {Math.max.apply(Math,points)} votes
    </div>
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
