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
        <input
          className="currency-data-field"
          type="text"
          name="amount"
          onChange={handleChange}
          value={currencies.amount}
        />
        <select
          className="start-currency-dropdown"
          name="startCurrency"
          value={currencies.startCurrency}
          onChange={(event) =>
            setCurrencies({...currencies, startCurrency: event.target.value})
          }
        >
          <option value="USD">US Dollars</option>
          <option value="EUR">Euros</option>
          <option value="GBP">British Pounds</option>
                
        </select>

        <select
          className="target-currency-dropdown"
          name="targetCurrency"
          value={currencies.targetCurrency}
          onChange={handleChange}
        >
          <option value="USD">US Dollars</option>
          <option value="EUR">Euros</option>
          <option value="GBP">British Pounds</option>
                
        </select>
      

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
