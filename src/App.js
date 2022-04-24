import './App.css';
import { BASE_URL, API_KEY } from './components/globals'
import { useState, useEffect } from 'react'
import axios from 'axios';
import UserInputAtTop from './components/UserInputAtTop'

const App = () => {
  
  const [requestedAmount, setRequestedAmount] = useState([])
  const [currFrom, setCurrFrom] = useState([])
  const [currTo, setCurrTo] = useState([])
  const [convertedAmount, setConvertedAmount] = useState([])
  
  const gatherFormDataFunc = (e) => {
    // gather data from the form on submit
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;
    const requestedAmount = document.getElementById('requestedAmount').value;
    console.log("currencyFrom: " + currencyFrom + "currencyTo: " + currencyTo + "requestedAmount: " + requestedAmount)
  
    const button1 = document.querySelector('#button1');

          button1.addEventListener('click', async () => {              
              setCurrFrom(currencyFrom)
              setCurrTo(currencyTo)
              setRequestedAmount(requestedAmount)
          })
  }


  return (
    <div className="App">
      <header className="App-header">
        <UserInputAtTop gatherFormDataFunc={gatherFormDataFunc} currFrom={currFrom} currTo={currTo} requestedAmount={requestedAmount} />
      </header>
    </div>
  );
}

export default App;
