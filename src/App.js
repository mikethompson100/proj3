import './App.css';
import { BASE_URL, API_KEY } from './components/globals'
import { useState, useEffect } from 'react'
import axios from 'axios';
import UserInputAtTop from './components/UserInputAtTop'
import ShowCurrentConversion from './components/ShowCurrentConversion'
import ShowHistory from './components/ShowHistory'

const App = () => {
  
  const [requestedAmount, setRequestedAmount] = useState([])
  const [currFrom, setCurrFrom] = useState([])
  const [currTo, setCurrTo] = useState([])
  const [convertedAmount, setConvertedAmount] = useState([])
  const [togglePage, setTogglePage] = useState([false])
  
  const gatherFormDataFunc = (e) => { // gather data from the form on submit
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;
    const requestedAmount = document.getElementById('requestedAmount').value;  
    const button1 = document.querySelector('#button1');
          button1.addEventListener('click', async () => {              
              setCurrFrom(currencyFrom)
              setCurrTo(currencyTo)
              setRequestedAmount(requestedAmount)
          })
  }

  const togglePages = () => {
    if (togglePage === true) {
      setTogglePage(false)
      document.getElementById('button').innerText = "SHOW CURRENT CONVERSION"
    }
    else {
      setTogglePage(true)
      document.getElementById('button').innerText = "SHOW HISTORY"
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <UserInputAtTop gatherFormDataFunc={gatherFormDataFunc} currFrom={currFrom} currTo={currTo} requestedAmount={requestedAmount} />
      </header>
      <div id="mainContainer">
        <button id="button" onClick={togglePages}>SHOW HISTORY</button>
        
      {
        togglePage ? (
          <ShowCurrentConversion/>
        )
        :
        (          
          <ShowHistory/>
        )
      }
     
      </div>
    </div>
  );
}

export default App;
