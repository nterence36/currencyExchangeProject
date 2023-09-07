

export default function CurrencyData () {
    const [currencies, setCurrencies] = useState({searchterm: "", });

  const handleChange = (event) => {
    
    setCurrencies({ ...currencies, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    props.movieSearch(currencies.searchterm);
  };
  return (
    <div className="CurrencyData">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
