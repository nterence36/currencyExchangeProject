
import './App.css'
import CurrencyData from './components/CurrencyData'

import ExchangeRateDisplay from './components/ExchangeRateDisplay'

function App() {

  const API_KEY = "6e02042e7ff1eec692cb0d5b4e7bda7d"
  const getConversion = () => {
      const response = fetch(`https://api.exchangeratesapi.io/v1/convert?access_key=${API_KEY}&from=GBP&to=JPY&amount=25`)
    }

  return (
    <div>
      <h1>CURRENCY EXCHANGE SITE</h1>
      <p>You  can see the exchange rates of over 170 currencies in the greate site <br></br></p>
      <p> In the first column enter the currency you current possed and enter in the second<br></br>
       input the currency you intend to convert to</p>
      <CurrencyData />
      <ExchangeRateDisplay />

    </div>
  )
}

export default App
