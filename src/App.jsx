import { useState } from "react";
import "./App.css";
import CurrencyData from "./components/CurrencyData";

import ExchangeRateDisplay from "./components/ExchangeRateDisplay";

function App() {
  const [currencyAppData, setCurrencyAppData] = useState({conversion: "", resultCurrency: "",})
 
  const API_KEY = 'e21ebb0683-8d0a0a17f8-s0qpsm'

  const getConversion = async (amount, startCurrency, targetCurrency) => {
   
    try {
       // The variable response will store the response from the API and fetch() is the function to call the API
      const response = await fetch(
 
        `https://api.fastforex.io/convert?from=${startCurrency}&to=${targetCurrency}&amount=${amount}&api_key=${API_KEY}`
      );
    const responseJSObj = await response.json();
   // console.log(responseJSObj);
    setCurrencyAppData({...currencyAppData, conversion:responseJSObj.result[targetCurrency], resultCurrency:targetCurrency})}
    catch(e){ console.error(e)}
   

  };
 


  return (
    <div>
      <h1>CURRENCY EXCHANGE SITE</h1>
      <p>
        You can see the exchange rates of over 170 currencies in the greate site{" "}
        <br></br>
      </p>
      <p>
        {" "}
        In the first column enter the currency you current possed and enter in
        the second<br></br>
        input the currency you intend to convert to
      </p>
      <CurrencyData currencyAvailable = {currencyAppData} getConversion={getConversion}/>
      <ExchangeRateDisplay currencyAppData={currencyAppData}/>
    </div>
  );
}

export default App;
