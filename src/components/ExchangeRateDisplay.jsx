export default function ExchangeRateDisplay({currencyAppData}) {
  return (
    <div className="ExchangeRateDisplay">
      <p>This is your conversion {currencyAppData.conversion} {currencyAppData.resultCurrency}</p>
    </div>
  );
}



























// fetch('https://api.fastforex.io/convert?from=USD&to=AED&amount=5&api_key=e21ebb0683-8d0a0a17f8-s0qpsm', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));