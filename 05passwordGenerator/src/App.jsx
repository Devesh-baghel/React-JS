import { useState,useCallback ,useEffect,useRef} from 'react'


import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumber] = useState(false);
  const [charAllowed,setChar] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook

  const passwordRef= useRef(null)
const passwordGenerator = useCallback(()=>{
  let pass= ""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"

  if(charAllowed) str+="!@#$%^&*(){}[]+=_-"

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass+= str.charAt(char)
  }
setPassword(pass)

},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,21)
   window.navigator.clipboard.writeText(password)
},[password])

 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
      

        <div className='flex shadow rounder-lg overflow-hidden mb-4'>

          <input 
          type="text" 
          value={password}
          className='bg-white outline-none w-full py-1 px-3 rounded-l-lg text-black' 
          placeholder='Password' 
          readOnly
          ref={passwordRef}
          />
          <button
           onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg hover:bg-green-400 '>Copy</button>
        </div>

<div className='flex text-sm gap-x-2'>

<div className="flex items-center gap-x-1">

<input type="range" 
min={6}
max={30}
value={length}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
/>
<label>Length:{length}</label>

</div>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"
         defaultChecked={numberAllowed}
         id="numberInput"
         onChange={()=>{
          setNumber((prev)=>!prev);
         }}
         />
  <label htmlFor='numberInput'>Numbers</label>       
</div>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"
         defaultChecked={charAllowed}
         id="charInput"
         onChange={()=>{
          setChar((prev)=>!prev);
         }}
         />
  <label htmlFor='charInput'>Characters </label>       
</div>
</div>


      </div>

    </>
  )
}

export default App
