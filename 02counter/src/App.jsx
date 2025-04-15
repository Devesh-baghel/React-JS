import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [counter,setCounter]=useState(15)

//let counter = 15;

const addvalue=()=>{
 if(counter <20){
      setCounter(counter+1)
  }
  }

const removeValue =()=>{
  if(counter == 0){
    alert('you cant reduce more')
    
  }else{setCounter(counter-1)}
  
}

  return (
    <>
     <h1>Chai aur code</h1>
     <h2>Counter value: {counter}</h2>
     <button
       onClick={addvalue}
     >Add Value </button><br></br>
     <button
     onClick={removeValue}>
      Remove Value</button>
    </>
  )
}

export default App
