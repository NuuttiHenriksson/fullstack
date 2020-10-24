import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <h1> {header} </h1>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
  )

const StatisticsLine = ({text,value}) => {
  return(
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const avg = ((good-bad)/all)
  const pos = (good/all)*100 + "%"
  const header = "Give feedback"
  const stats = "Statistics"

  const increaseByOneGood = () => {
    setGood(good + 1)
    setAll(all+1)
  }
  const increaseByOneBad = () => {
    setBad(bad + 1)
    setAll(all+1)
  }
  const increaseByOneNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all+1)
  }


  const start = (
    <div>
    <Header header={header}/>
    <Button
    handleClick = {increaseByOneBad}
    text = 'Bad'
    />
    <Button
    handleClick = {increaseByOneNeutral}
    text = 'Neutral'
    />
    <Button
    handleClick = {increaseByOneGood}
    text = 'Good'
    />
    <Header header={stats}/>
    </div>
  )

    if(all === 0){
      return(
        <div>
        {start}
        <b>No feedback given</b>
        </div>
      )
      } else {
        return(
        <div>
        {start}
        <table>
        <StatisticsLine text='Good' value={good}/>
        <StatisticsLine text='Neutral' value={neutral}/>
        <StatisticsLine text='Bad' value={bad}/>
        <StatisticsLine text="All" value={all}/>
        <StatisticsLine text="Average" value={avg}/>
        <StatisticsLine text="Positive" value={pos}/>
        </table>
        </div>
      )
      }

}

ReactDOM.render(<App />,
  document.getElementById('root')
)
