import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400
     rounded-xl text-black'>chai aur code </h1>
   <Card username="monkey" btnText="Check Me"/>
   <Card username="kratos" btnText="Visit ME"/>     
    </>
  )
}

export default App
