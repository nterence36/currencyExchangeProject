import { useState, useEffect } from "react";
import "./App.css";
import CurrencyData from "./components/CurrencyData";

import ExchangeRateDisplay from "./components/ExchangeRateDisplay";

function App() {
  const [currencyAppData, setCurrencyAppData] = useState({conversion: "", amount: "", currency: "", resultCurrency: "",})
  
  
  const API_KEY = '382c88419b-d932c81958-s0z53g';

  const getConversion = async (amount, startCurrency, targetCurrency) => {
   
    try {
       // The variable response will store the response from the API and fetch() is the function to call the API
      const response = await fetch(
        
        `https://api.fastforex.io/convert?from=${startCurrency}&to=${targetCurrency}&amount=${amount}&api_key=${API_KEY}`
      );
    const responseJSObj = await response.json();
      
   // setCurrencyAppData will be pass down to child components
     setCurrencyAppData({...currencyAppData, conversion:responseJSObj.result[targetCurrency], amount:amount, currency:startCurrency, resultCurrency:targetCurrency})
    
  }
    catch(e){ console.error(e)}
   

  };
 
useEffect(() => {
  getConversion(1, "USD", "EUR")
}, [])

  return (
    <div className="app">
      <h1>CURRENCY CONVERSION SITE</h1>
      <p>
        This site is limited to only 7 currencies.US Dollars, Euro, Nigerian Naira, 
        <br></br>Chinese Yuan, British Pounds, Cuban Peso and Swiss Franc 
        
      </p>
      <p>
        In the first column enter the amount you want to convert, follow by selecting <br></br>
        the currency you're to convert on firt dropdown, thenselect the currency you <br></br>intend
       to convert to  on second dropdown and finally select or click submit <br></br>button to get your result.
      </p>
      <CurrencyData currencyAvailable = {currencyAppData} getConversion={getConversion}/>
      <ExchangeRateDisplay currencyAppData={currencyAppData}/>
    </div>
  );
}

export default App;
