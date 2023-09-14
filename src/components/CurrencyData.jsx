import { useState } from "react";

export default function CurrencyData({getConversion}) {
  const [currencies, setCurrencies] = useState({
    startCurrency: "USD",
    targetCurrency: "EUR",
    amount: 1,
  });

  const handleChange = (event) => {
    setCurrencies({ ...currencies, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    getConversion(currencies.amount, currencies.startCurrency, currencies.targetCurrency)
  };

  return (
    <div className="CurrencyData">
      <form className="currency-data-form" onSubmit={handleSubmit}>
      
       {/* input where user enter an amount to convert */}
        <h2>Convert: <input
          className="amount"
          type="text"
          name="amount"
          onChange={handleChange}
          value={currencies.amount}
        /></h2>


        <select
          className="start-currency-dropdown"
          name="startCurrency"
          value={currencies.startCurrency}
          onChange={(event) =>
            setCurrencies({...currencies, startCurrency: event.target.value})
          }
        >
         
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CUP">Cuban Peso</option>
          <option value="CNY">Chinese Yuan</option>
          <option value="NGN">Nigerian Naira</option>
        </select>

         <strong>TO</strong>


        <select
          className="target-currency-dropdown"
          name="targetCurrency"
          value={currencies.targetCurrency}
          onChange={handleChange}
        > 
           <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CUP">Cuban Peso</option>
          <option value="CNY">Chinese Yuan</option>
          <option value="NGN">Nigerian Naira</option> 
        </select>
        <br></br>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
