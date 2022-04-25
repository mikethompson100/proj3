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
  const [togglePage, setTogglePage] = useState(true)
  const [responseFromCurrency, setResponseFromCurrency] = useState({})
  const [responseToCurrency, setResponseToCurrency] = useState({})
  const [convertButtonPressed, setConvertButtonPressed] = useState(false)
  

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
    
    if (convertButtonPressed)
      {
        setConvertButtonPressed(false)
      }  
      else    
      {
        setConvertButtonPressed(true)
      }  
  }


  useEffect(() => {
    async function getData() {
      const resFrom = 
      {
          data: {
               result: "success",
              documentation: "https://www.exchangerate-api.com/docs",
              terms_of_use: "https://www.exchangerate-api.com/terms",
              time_last_update_unix: 1650844802,
              time_last_update_utc: "Mon, 25 Apr 2022 00:00:02 +0000",
              time_next_update_unix: 1650931202,
              time_next_update_utc: "Tue, 26 Apr 2022 00:00:02 +0000",
              base_code: "AUD",
              conversion_rates: {
                  AUD: 1,
                  AED: 2.664,
                  AFN: 63.8758,
                   ALL: 80.8796,
                   AMD: 343.1566,
                   ANG: 1.2984,
                   AOA: 297.731,
                   ARS: 83.3653,
                   AWG: 1.2984,
                   AZN: 1.2413,
                   BAM: 1.3143,
                   BBD: 1.4508,
                   BDT: 62.0118,
                   BGN: 1.3145,
                   BHD: 0.2727,
                   BIF: 1473.6512,
                   BMD: 0.7254,
                   BND: 0.999,
                   BOB: 5.0331,
                   BRL: 3.424,
                   BSD: 0.7254,
                   BTN: 55.5701,
                   BWP: 8.6013,
                   BYN: 2.2974,
                   BZD: 1.4508,
                   CAD: 0.922,
                   CDF: 1450.6064,
                   CHF: 0.6942,
                   CLP: 601.5633,
                   CNY: 4.723,
                   COP: 2748.2918,
                   CRC: 479.4222,
                   CUP: 17.4092,
                   CVE: 74.0998,
                   CZK: 16.5704,
                   DJF: 128.9157,
                   DKK: 5.0135,
                   DOP: 40.3316,
                   DZD: 105.126,
                   EGP: 13.5869,
                   ERN: 10.8807,
                   ETB: 37.2757,
                   EUR: 0.6719,
                   FJD: 1.5344,
                   FKP: 0.5648,
                   FOK: 5.0135,
                   GBP: 0.5648,
                   GEL: 2.2314,
                   GGP: 0.5648,
                   GHS: 5.6971,
                   GIP: 0.5648,
                   GMD: 39.1955,
                   GNF: 6453.8112,
                   GTQ: 5.6113,
                   GYD: 151.6356,
                   HKD: 5.7005,
                   HNL: 17.9872,
                   HRK: 5.0633,
                   HTG: 78.3139,
                   HUF: 249.9265,
                   IDR: 10433.6343,
                   ILS: 2.3829,
                   IMP: 0.5648,
                   INR: 55.4612,
                   IQD: 1057.6774,
                   IRR: 30902.2287,
                   ISK: 94.2801,
                   JEP: 0.5648,
                   JMD: 113.3168,
                   JOD: 0.5143,
                   JPY: 93.3798,
                   KES: 84.4384,
                   KGS: 61.2544,
                   KHR: 2931.3345,
                   KID: 1,
                   KMF: 330.6101,
                   KRW: 901.8354,
                   KWD: 0.2173,
                   KYD: 0.6045,
                   KZT: 324.8886,
                   LAK: 9572.5398,
                   LBP: 1093.5143,
                   LKR: 238.4248,
                   LRD: 110.8395,
                   LSL: 11.2967,
                   LYD: 3.4181,
                   MAD: 7.0744,
                   MDL: 13.565,
                   MGA: 2963.6,
                   MKD: 42.0044,
                   MMK: 1332.287,
                   MNT: 2214.182,
                   MOP: 5.8736,
                   MRU: 26.4194,
                   MUR: 30.6241,
                   MVR: 11.2168,
                   MWK: 597.0437,
                   MXN: 14.7069,
                   MYR: 3.1207,
                   MZN: 46.4804,
                   NAD: 11.2967,
                   NGN: 303.0718,
                   NIO: 26.2437,
                   NOK: 6.4926,
                   NPR : 88.9122,
                   NZD: 1.0931,
                   OMR: 0.2789,
                   PAB: 0.7254,
                  PEN: 2.73,
                  PGK: 2.5681,
                  PHP: 37.9682,
                  PKR: 136.1741,
                  PLN: 3.1127,
                  PYG: 5026.4496,
                  QAR: 2.6404,
                  RON: 3.3391,
                  RSD: 79.3791,
                  RUB: 56.5336,
                  RWF: 771.3982,
                  SAR: 2.7202,
                  SBD: 5.7376,
                  SCR: 10.4839,
                  SDG: 322.8852,
                  SEK: 6.9147,
                  SGD: 0.998,
                  SHP: 0.5648,
                  SLL: 8971.9167,
                  SOS: 419.2711,
                  SRD: 15.0401,
                  SSP: 309.4804,
                  STN: 16.4644,
                  SYP: 1832.1204,
                  SZL: 11.2967,
                  THB: 24.7498,
                  TJS: 9.1614,
                  TMT: 2.6062,
                  TND: 2.1494,
                  TOP: 1.6214,
                  TRY: 10.7046,
                  TTD: 4.97,
                  TVD: 1,
                  TWD: 21.1721,
                  TZS: 1692.46,
                  UAH: 21.5504,
                  UGX: 2564.3125,
                  USD: 0.7253,
                  UYU: 30.0145,
                  UZS: 8347.3791,
                  VES: 3.2654,
                  VND: 16692.5145,
                  VUV: 81.3333,
                  WST: 1.8618,
                  XAF: 440.8135,
                  XCD: 1.9585,
                  XDR: 0.5374,
                  XOF: 440.8135,
                  XPF: 80.193,
                  YER: 182.4338,
                  ZAR: 11.3047,
                  ZMW: 12.3165,
                  ZWL: 111.0521
              }
          }
      } 
      const resTo = 
      {
          data: {
              result: "success",
              documentation: "https://www.exchangerate-api.com/docs",
              terms_of_use: "https://www.exchangerate-api.com/terms",
              time_last_update_unix: 1650844802,
              time_last_update_utc: "Mon, 25 Apr 2022 00:00:02 +0000",
              time_next_update_unix: 1650931202,
              time_next_update_utc: "Tue, 26 Apr 2022 00:00:02 +0000",
              base_code: "USD",
              conversion_rates: {
                  AUD: 1,
                  AED: 2.664,
                  AFN: 63.8758,
                  ALL: 80.8796,
                  AMD: 343.1566,
                  ANG: 1.2984,
                  AOA: 297.731,
                  ARS: 83.3653,
                  AWG: 1.2984,
                  AZN: 1.2413,
                  BAM: 1.3143,
                  BBD: 1.4508,
                  BDT: 62.0118,
                  BGN: 1.3145,
                  BHD: 0.2727,
                  BIF: 1473.6512,
                  BMD: 0.7254,
                  BND: 0.999,
                  BOB: 5.0331,
                  BRL: 3.424,
                  BSD: 0.7254,
                  BTN: 55.5701,
                  BWP: 8.6013,
                  BYN: 2.2974,
                  BZD: 1.4508,
                  CAD: 0.922,
                  CDF: 1450.6064,
                  CHF: 0.6942,
                  CLP: 601.5633,
                  CNY: 4.723,
                  COP: 2748.2918,
                  CRC: 479.4222,
                  CUP: 17.4092,
                  CVE: 74.0998,
                  CZK: 16.5704,
                  DJF: 128.9157,
                  DKK: 5.0135,
                  DOP: 40.3316,
                  DZD: 105.126,
                  EGP: 13.5869,
                  ERN: 10.8807,
                  ETB: 37.2757,
                  EUR: 0.6719,
                  FJD: 1.5344,
                  FKP: 0.5648,
                  FOK: 5.0135,
                  GBP: 0.5648,
                  GEL: 2.2314,
                  GGP: 0.5648,
                  GHS: 5.6971,
                  GIP: 0.5648,
                  GMD: 39.1955,
                  GNF: 6453.8112,
                  GTQ: 5.6113,
                  GYD: 151.6356,
                  HKD: 5.7005,
                  HNL: 17.9872,
                  HRK: 5.0633,
                  HTG: 78.3139,
                  HUF: 249.9265,
                  IDR: 10433.6343,
                  ILS: 2.3829,
                  IMP: 0.5648,
                  INR: 55.4612,
                  IQD: 1057.6774,
                  IRR: 30902.2287,
                  ISK: 94.2801,
                  JEP: 0.5648,
                  JMD: 113.3168,
                  JOD: 0.5143,
                  JPY: 93.3798,
                  KES: 84.4384,
                  KGS: 61.2544,
                  KHR: 2931.3345,
                  KID: 1,
                  KMF: 330.6101,
                  KRW: 901.8354,
                  KWD: 0.2173,
                  KYD: 0.6045,
                  KZT: 324.8886,
                  LAK: 9572.5398,
                  LBP: 1093.5143,
                  LKR: 238.4248,
                  LRD: 110.8395,
                  LSL: 11.2967,
                  LYD: 3.4181,
                  MAD: 7.0744,
                  MDL: 13.565,
                  MGA: 2963.6,
                  MKD: 42.0044,
                  MMK: 1332.287,
                  MNT: 2214.182,
                  MOP: 5.8736,
                  MRU: 26.4194,
                  MUR: 30.6241,
                  MVR: 11.2168,
                  MWK: 597.0437,
                  MXN: 14.7069,
                  MYR: 3.1207,
                  MZN: 46.4804,
                  NAD: 11.2967,
                  NGN: 303.0718,
                  NIO: 26.2437,
                  NOK: 6.4926,
                  NPR: 88.9122,
                  NZD: 1.0931,
                  OMR: 0.2789,
                  PAB: 0.7254,
                  PEN: 2.73,
                  PGK: 2.5681,
                  PHP: 37.9682,
                  PKR: 136.1741,
                  PLN: 3.1127,
                  PYG: 5026.4496,
                  QAR: 2.6404,
                  RON: 3.3391,
                  RSD: 79.3791,
                  RUB: 56.5336,
                  RWF: 771.3982,
                  SAR: 2.7202,
                  SBD: 5.7376,
                  SCR: 10.4839,
                  SDG: 322.8852,
                  SEK: 6.9147,
                  SGD: 0.998,
                  SHP: 0.5648,
                  SLL: 8971.9167,
                  SOS: 419.2711,
                  SRD: 15.0401,
                  SSP: 309.4804,
                  STN: 16.4644,
                  SYP: 1832.1204,
                  SZL: 11.2967,
                  THB: 24.7498,
                  TJS: 9.1614,
                  TMT: 2.6062,
                  TND: 2.1494,
                  TOP: 1.6214,
                  TRY: 10.7046,
                  TTD: 4.97,
                  TVD: 1,
                  TWD: 21.1721,
                  TZS: 1692.46,
                  UAH: 21.5504,
                  UGX: 2564.3125,
                  USD: 0.7253,
                  UYU: 30.0145,
                  UZS: 8347.3791,
                  VES: 3.2654,
                  VND: 16692.5145,
                  VUV: 81.3333,
                  WST: 1.8618,
                  XAF: 440.8135,
                  XCD: 1.9585,
                  XDR: 0.5374,
                  XOF: 440.8135,
                  XPF: 80.193,
                  YER: 182.4338,
                  ZAR: 11.3047,
                  ZMW: 12.3165,
                  ZWL: 111.0521
              }
          }
      } 
      //await axios.get(`${BASE_URL}/${API_KEY}/latest/${props.currFrom}`)
      const responseTo = {} 
      //await axios.get(`${BASE_URL}/${API_KEY}/latest/${props.currTo}`)
 
      setResponseFromCurrency(resFrom)
      setResponseToCurrency(resTo)
      //console.log(responseFromCurrency)
    }        
    getData()
  }, [convertButtonPressed])

  const togglePages = () => {
    if (togglePage === true) {
      setTogglePage(false)
      
    }
    else {
      setTogglePage(true)
      
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <UserInputAtTop gatherFormDataFunc={gatherFormDataFunc} currFrom={currFrom} currTo={currTo} requestedAmount={requestedAmount} />
      </header>
      <div id="mainContainer">
        <button id="button" onClick={togglePages}>{togglePage ? "SHOW HISTORY" : "CURRENT CONVERSION"}</button>
        
      {
        togglePage ? (
          <ShowCurrentConversion requestedAmount={requestedAmount} responseFromCurrency={responseFromCurrency} responseToCurrency={responseToCurrency} />
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
