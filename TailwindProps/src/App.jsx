import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';

function App() {

  let myObj={
    name:"Adarsh",
    age:25,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded'>Tailwind test</h1>
      <Card username="Adarsh Kumar" btnText="Click me"/>
      <Card username="Adarsh Rajput" />
    </>
  )
}

export default App
