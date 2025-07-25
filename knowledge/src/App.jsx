import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=useState(0);

 const addValue=()=>{
  setCounter((counter)=>{
    return counter+1 } );
  console.log("Counter value is: ", counter);
 }

 const removeValue=()=>{
  setCounter((counter)=>{
    return counter-1;
  })
 }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Count Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br /><br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App