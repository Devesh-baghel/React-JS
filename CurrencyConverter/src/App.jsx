import { useState } from 'react'

import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/userCurrencyInfo'
import './App.css'

function App() {
 const [amount,setAmount]=useState(0);
 const [from,setFrom] = useState("usd");
 const [to,setTo] = useState("inr")
 const [convertedAmount,setConvertedAmount]=useState(0);

 const currencyInfo = useCurrencyInfo(from)

 const options = Object.keys(currencyInfo)

 const swap = ()=>{
     setFrom(to)
     setTo(from)
     setConvertedAmount(amount)
     setAmount(convertedAmount)
 }

 const convert = ()=>{setConvertedAmount(amount * currencyInfo[to])}
 

 return (
 
  <div
      id='main'  
      
     
  >
      <div id='outer'>
          <div id='inner'>
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div id='inner-1'>
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=> setAmount(amount)}
                          selectCurrency={(from)}
                          onAmountChange = {(amount)=>setAmount(amount)}
                      />
                  </div>
                  <div id='swap'>
                      <button
                          type="button"
                          className=""
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div id='inner-2'>
                      <InputBox
                          label="To"
                          
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={(to)}
                          
                      />
                  </div>
                  <button type="submit" id='submitbtn'>
                      Convert {from.toLocaleUpperCase() } to { to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>

);
}

export default App
