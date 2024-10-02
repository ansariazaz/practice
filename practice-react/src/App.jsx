import { useState,useMemo } from 'react'
import './App.css'
import useCustomMemo from './Hooks/use-custom-memo'


function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const calculateSquare = ()=>{
    console.log("called")
    return counter*counter
  }
  
  // let squareValue =  useMemo(calculateSquare, [counter])
  let squareValue = useCustomMemo(calculateSquare,[counter])
  return (
    <>
    <h1>counter:{counter}</h1>
     <button onClick={()=>setCounter(counter+1)}>increament</button>
     <h2>Square: {squareValue}</h2>
      <h2> counter2:{counter2}</h2>
     <button onClick={()=>setCounter2(counter2-1)}>decrement</button>
    </>
  )
}

export default App
