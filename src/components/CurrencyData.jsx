import { useState } from "react";

export default function CurrencyData(props) {
  const [currencies, setCurrencies] = useState({
    startCurrency: "",
    targetCurrency: "",
  });

  const handleChange = (event) => {
    setCurrencies({ ...currencies, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.currencySearch(currencies.searchterm);
  };
  return (
    <div className="CurrencyData">
      <form className="currency-data-form" onSubmit={handleSubmit}>
        <input
          className="currency-data-field"
          placeholder="Currency to convert?"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={currencies.searchterm}
        />
        <select
          value={currencies.startCurrency}
          onChange={(event) =>
            setCurrencies((currencies.startCurrency = event.target.value))
          }
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
