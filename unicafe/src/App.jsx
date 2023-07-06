import { useState } from "react"
const StatisticLine=(props)=>{

  return(
    <tbody>
    
      <tr>
        <td>{props.text}</td>
        <td>{props.value}{props.text==='positive'?'%':''}</td>

      </tr>
      </tbody>
    
    
  )
}
const Statistics=(props)=>{
  const all=props.good+props.neutral+props.bad
  const average=(props.good-props.bad)/all
  const positive=(props.good/all)*100
  return(
    <>
      <h1>statistics</h1>
      {all>0 ?<table >
      <StatisticLine text='good' value={props.good}/>
      <StatisticLine text='neutral' value={props.neutral}/>
      <StatisticLine text='bad' value={props.bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive}/></table>
      :<p>No feedback given</p>}
    </>
  )
}

const Button=({good,bad,neutral,setGood,setNeutral,setBad})=>{

  return(
    <>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
    </>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>

      <Button good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    
    </div>
  )
}
export default App